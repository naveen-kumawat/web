---
sidebar_position: 4
---

import Translate from '@site/src/components/Translate.js';

# Navigation Voice Prompt Triggering

                               
**(Compiled by Hardy 2013, last reviewed 2021-01)**
## Principle
* Far-out prompts are simply triggered based on a **lead distance threshold**, derived by converting a meaningful lead time via the **<Translate android="true" ids="default_speed_setting_title" />** of the profile.
* Users can change the **<Translate android="true" ids="default_speed_setting_title" />** of the profile and it will affect the trigger distance for voice prompts.
* *Note*: The **<Translate android="true" ids="default_speed_setting_title" />** also affects the calculated route time 
* Another way to change the voice prompt timing is to configure setting **<Translate android="true" ids="arrival_distance" />**. Check column **Arrival setting** further below to see which voice prompts will be affected. The trigger distance will be multiplied by the following factor

**<Translate android="true" ids="arrival_distance" />** | Distance multiplier
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* For close prompts, both a **distance threshold** and a **time threshold** are used (see column Time threshold below). The time threshold ensures that the announcements are triggered early enough even if your current speed exceeds the **<Translate android="true" ids="default_speed_setting_title" />**.
* In addition, there is a user-configurable overall `VOICE_PROMPT_DELAY`, particularly needed for output type _Phone call audio_, where we emulate a call to a car stereo which comes with a noticeable delay. (Also all distances to be used in the prompts anticipate `VOICE_PROMPT_DELAY`!)
* We mute prompts immediately once they appear to refer actions already passed, or if your direction of travel seems no in line with a current route.

## Base Profile Default Speeds
While these are now also user-adjustable, the defaults are
* Driving: 12.5 m/s (45 km/h)
* Cycling: 2.78 m/s (10 km/h)
* Walking: 1.11 m/s (4 km/h)
* Boat: 1.39 m/s (5 km/h)
* Ski: 1.39  m/s (5 km/h)
* Aircraft: 40 m/s (144 km/h)

## Trigger Behavior
Prompt type | Trigger time (sec) | Trigger distance (m) | Time threshold used | Arrival setting | Comment |
--- | --- | --- | --- | --- | -- |
Turn now | Driving: 7 s   Cycling: 3.2 s   Walking: 2 s | Driving: 45 m    Cycling: 10 (12) m    Walking: 4 (12) m | :heavy_check_mark: | :heavy_check_mark: | Dist for 3.6 s, min 12 m      Time = max(8, sqrt(speed \* 3.6)) |
Turn in X m | 22 s | Driving: 275 m    Cycling: 61 m    Walking: 24 m | :heavy_check_mark: |  | Skipped if less 15 seconds before turn |
Prepare to turn in X m | 115 s | Driving: 1438 m    Cycling: 319 m    Walking: - |  |  | Skipped if less 150 meters before "Turn in"  Skipped if speed < 8 km/h |
Long Prepare to turn in X m | 300 s | Driving: -    Cycling: -    Walking: - |  |  | Skipped if default speed < 108 km/h |
Go Ahead | >300 s | Driving: 3750 m    Cycling: 833 m    Walking: 333 m | | | after route calculation if no other prompt is due, or after a turn if next turn is more than *Long Prepare* |
Arrive at destination or intermediate | 5 s | Driving: 63 m    Cycling: 14 m    Walking: 6 (12) m | |:heavy_check_mark: | Min 12 m |
Approaching waypoint / favorite / POI | 60 s | Driving: 750 m    Cycling: 167 m    Walking: 67 m | :heavy_check_mark: | :heavy_check_mark: | Limit to max 1 pnt at a time |
Passing waypoint / favorite / POI | 15 s | Driving: 188 m    Cycling: 42 m    Walking: 17 m | :heavy_check_mark: | :heavy_check_mark: | Limit to max 3 pnts at a time |
Standard alarm | 12 s | Driving: 150 m    Cycling: 33 m    Walking: 13 m | :heavy_check_mark: | :heavy_check_mark: | 
Close alarm | 7 s | Driving: 88 m    Cycling: 20 m    Walking: 8 m | :heavy_check_mark: | :heavy_check_mark: | Traffic calming uses *pass alarm* for approach prompt and filters duplicate in this radius |
Off-route announcement | 20 s | Driving: 250 m    Cycling: 56 m    Walking: 22 m | | :heavy_check_mark: | Could be disabled |
GPS signal lost | 20 s | - | | | Is played after GPS signal has been lost for continuous 20 s and this was not caused by user action. |
