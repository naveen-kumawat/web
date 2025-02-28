---
sidebar_position: 1
title:  Route Preparation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>


## Overview

The Navigation by route option provides you with simple step-by-step instructions, that help you easily reach your destination. Like other [navigation options](../index.md), *Navigation by route* can be used with different [types of routing](./../routing/index.md) (or profiles). No matter whether you drive a [car](./../routing/car-based-routing.md), ride a [horse](./../routing/horse-routing.md), [ski](./../routing/ski-routing.md) or [walk](./../routing/pedestrian-routing.md).  
By default, OsmAnd has offline navigation enabled. Although you can also use [online routing engines](./../routing/online-routing.md).  

:::tip
For correct work of the navigation, you need to give OsmAnd permission to receive information about [precise location](../../start-with/first-steps.md#permission-to-access-the-location) of your device.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation screen Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigation screen Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigation screen iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>

## Set destinations

To use the offline navigation, you first need to [download maps](../../start-with/download-maps.md) of the region you plan to navigate through. Once the maps are downloaded, follow these steps to set up navigation:  

1. Configure profiles you intend to use for navigation according to your needs:  

    - Set your [vehicle parameters](../guidance/navigation-settings.md#size-parameters) (important for truck drivers), select the [engine type](../guidance/navigation-settings.md#fuel-used-by-motor) (optional).
    - Configure [route line appearance](../guidance/map-during-navigation#route-line-appearance) (optional, only for Pro users).  
    - Choose whether to provide [notifications](../guidance/voice-navigation.md) during your route or not. If you need voice prompts, [configure](../guidance/voice-navigation.md#settings-of-voice-prompts) them.
 
2. Go to the [Navigation menu](#navigation-menu):
    - Specify the [destination point](#set-target-point).
    - You can switch between different [routing types](./../routing/index.md) (profiles) to get the best result.
    - Add [intermediate destinations](#intermediate-destinations) (optional).
    - You can also change the departure point from the [current location](../../map/interact-with-map#my-location--zoom) to the required one.
  
3. Additional [navigation settings](#settings) can be used depending on your purposes (you can configure which roads to avoid or prefer, save fuel or choose the fastest route, etc).

4. [Start](#start--stop-navigation) navigation or at first [simulate navigation](#simulate-navigation) (with this function you can test your route before actually traveling along it).

5. While on the route you can [Pause/Resume](#pause--resume-navigation) navigation and [Stop](#start--stop-navigation) it.

### Navigation menu  

There are 3 ways to reach the navigation menu:

- [The navigation button](../../widgets/map-buttons.md#directions) on the map screen.  
- *Direction to/from* in a [map context menu](../../map/map-context-menu#directions-to--from).  
- Navigation section in the Main menu  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation menu Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation menu iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- &nbsp;_<Translate android="true" ids="shared_string_my_location"/>_ - allows you to choose where your route will start. The default value is [my curent location](../../map/interact-with-map.md#my-location--zoom), though you can set a different one.
- &nbsp;_<Translate android="true" ids="add_destination_point"/>_ - is used to [set your destination point](#set-destination).
- &nbsp;"&#43;" - allows to add [intermediate points](../../widgets/nav-widgets.md#intermediate-destination) for navigation.
- &nbsp;"&#8595;&#8593;" - allows to swap *Start* and *Finish* points.
- &nbsp;"&#128266;" - can be used to switch off [Voice prompts](../guidance/voice-navigation.md).
- &nbsp;_<Translate android="true" ids="shared_string_settings"/>&#x2699_ - leads to menu where you can quickly adjust some of the [Navigation settings](#settings).

In Navigation menu you can set your destination using:
- Special favories points [**Home / Work**](#use-home--work-points).
- Previous route or History.

Cansel button at the bottom of the screen leads back to the main screen. [Start button](#start--stop-navigation) can be used to start Navigation after route calculation has ended.
  
### Choose starting point

As for the starting point, you can choose your current location, location of a [Favorite point](../../map/point-layers-on-map.md#favorites), select a point on the map or use [Search](../../search/index.md). You can also set a starting point in [Map Context menu](../../map/map-context-menu.md) by selecting the [Directions from](../../map/map-context-menu.md#directions-to--from) function.  

### Set target point

The most important thing to start navigation is to determine your destination. The destination point can be found using a [Search](../../search/index.md#overview) function, or simply on a map. You can also set target point in the [Navigation menu](#navigation-menu):  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation menu Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Navigation menu iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

- &nbsp;_<Translate android="true" ids="search_button"/>_ - opens [the search menu](../../search/index.md).
- &nbsp;_<Translate android="true" ids="shared_string_address"/>_ - opens [address search menu](../../search/search-address.md).
- &nbsp;_<Translate android="true" ids="shared_string_select_on_map"/>_ - opens the map to choose a destination point by tapping on the map.
- &nbsp;_<Translate android="true" ids="shared_string_favorites"/>_ - allows to use [Favorite](../../personal/favorites.md) as a destination.
- &nbsp;_<Translate android="true" ids="shared_string_markers"/>_ - allows to choose one of the [Map markers](../../personal/markers.md) as a destination point.
- &nbsp;"&#8595;&#8593;" _Swap Starting point and Destination_ - allows to swap *Start* and *Finish* points.

### Intermediate destinations

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 1](@site/static/img/navigation/route/navigation_interpoints_android.png) ![Navigation intermediate Android 2](@site/static/img/navigation/route/navigation_interpoints_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- &nbsp;"&#x1F589;" - allows to open the destination points list to make changes.
- &nbsp;"&#8592;" - moves to Navigation menu screen.
- &nbsp;"&#10005;" - allows to delete destination point from the points list.
- &nbsp;"&#61;" - allows to change point order in the points list.
- &nbsp;"&#43; Add" - opens context menu "Add intermediate".
- &nbsp;"&#9776; Clear all" - allows to clear all intermediate points.

If you choose "Sort" (Android) or "Options" (iOS) in the destinations points list, you will reach special options to adjust the order of navigation to intermediate points.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In this menu, you can find additional options for managing destinations points:
-  *<Translate android="true" ids="intermediate_items_sort_by_distance"/>* - OsmAnd will offer the shortest route between all your destinations, however, the order of the visit can be edited. The starting point and the final destination will not be changed.
-  *<Translate android="true" ids="switch_start_finish"/>* - starting point and final destination will be swapped.  
-  *<Translate android="true" ids="reverse_all_points"/>* (only Android) - all points will be put in the reverse direction.
-  *<Translate android="true" ids="add_intermediate_point"/>* (or *<Translate ios="true" ids="add_waypoint_short"/>* for iOS) - you can add intermediate destination from this menu.
-  *<Translate android="true" ids="clear_all_intermediates"/>* - all the intermediate destinations will be removed from the map.

### Use Home / Work points

_Home_ and _Work_ tabs (or [Special points](../../personal/favorites.md#special-favorites-personal) of Favorites)  can be used to quickly set destination point in the navigation menu.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Special favorites Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Special favorites iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

### Previous route / History

If  [Navigation History](../../personal/global-settings.md#history) recording is enabled, you can use previous route or destinations from history list for navigation. This option can be useful for quick access to frequently used routes. Items in the history list are sorted by most recent use, starting with the newest.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Previous route Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Previous route  iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

## Start / stop navigation

Once your destination point is selected, the app will create a route to it. To begin navigation, you need to use "Start" button. To stop navigation mode, tap on the "Stop" button and confirm your choice.  

:::note
After the route is created, in the ["Details" section](../setup/route-details.md) you can find additional information (altitude, uphill, downhill, road type, turn-by-turn instructions, etc.), analyze your route on the map, print the route plan, save the route and share it.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation screen start Android](@site/static/img/navigation/route/navigation_start_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

:::note
Even if you turn off the screen or exit the OsmAnd app, you'll still get voice prompts.  
:::

:::tip
To save your device battery, while navigation you can use [“Screen control”](../guidance/voice-navigation.md#screen-control) options (<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>).  
:::

## Settings

In this section, you can read about all the navigation settings (routing, vehicle, navigation parameters, voice prompts, and how the map looks while moving) that can be set for a profile.  

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.  
- *Navigation button → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.  
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
There are no navigation settings in *Browse map* profile.  
:::
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Navigation Settings Android](@site/static/img/personal/profiles/profile_navigation_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Navigation Settings iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** determines how routes are calculated. For example, your bicycle profile has a Cycling navigation type, which set the routing rules. You can import these roules (as routing.xml file) in OsmAnd. More about routing you can read on our [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) page.&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** controls which parameters will be used during routing (this is the process of selecting a route for navigation).

Please read about route parameters for the corresponding navigation type.

### Navigation settings

How to configure [routing type](../routing/index.md#routing-types) and [route parameters](../guidance/navigation-settings.md#route-parameters) you can read in the [Navigation settings article](../guidance/navigation-settings.md) or in articles about specific types of routing in the [Route Parameters chapter](../routing/).  

### Route recalculation

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/>* | <details><summary> <Translate android="true" ids="select_distance_route_will_recalc"/>  </summary>![Avoid roads Android](@site/static/img/navigation/routing/car_recalculate_route_andr.png) </details>        | If [Voice prompts](../guidance/voice-navigation.md#settings-of-voice-prompts) are turned on, OsmAnd will announce, that route is being recalculated. |
| *<Translate android="true" ids="in_case_of_reverse_direction"/>*  | Your route will be recalculated if you move to the starting point.  |  When the setting is turned off, the movement to the starting point will not be considered as a deviation from the path (if it is performed along the calculated route).  |

### Simulate navigation

Simulate navigation function allows users to test and preview a navigation route without actually physically traveling along it. This can be useful for:  
- Planning. You can see how long it may take to complete the entire route or its single segment.
- Familiarization. You can familiarize yourself with the route before you actually go along it. This can be useful in unfamiliar areas, such as a new city or a difficult transport interchange.
- Testing. You can test the OsmAnd navigation system itself to make sure it works correctly and provides accurate instructions.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

When the navigation route is built. You can start to simulate a motion by this way using features _"<Translate android="true" ids="simulate_navigation"/>"_.

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,simulate_navigation"/>_. Enable the feature and starting navigation.

You can choose "<Translate ios="true" ids="speed_mode"/>" settings for the speed of simulation navigation: _<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,simulate_navigation"/>  →  &#x2699_

![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_android.png) ![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_android_2.png)

- &nbsp;_<Translate android="true" ids="simulation_preview_mode_title"/>_ - <Translate android="true" ids="simulation_preview_mode_desc"/>
- &nbsp;_<Translate android="true" ids="simulation_constant_mode_title"/>_ - <Translate android="true" ids="simulation_constant_mode_desc"/>
- &nbsp;_<Translate android="true" ids="simulation_real_mode_title"/>_ - <Translate android="true" ids="simulation_real_mode_desc"/>

When you click on ["Start" button](#how-to-use), your simulation of navigation will start. 

For stop the simulation of navigation you need to click on ["Navigation" button → "Dismiss" button](#how-to-use).  

</TabItem>

<TabItem value="ios" label="iOS">

When the navigation route is built. You can start to simulate a motion by this way using features _"<Translate ios="true" ids="simulate_navigation"/>"_.

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,routing_settings,shared_string_settings,simulate_navigation"/>_. Enable the feature and starting navigation.

You can choose "<Translate ios="true" ids="speed_mode"/>" settings for the speed of simulation navigation: _<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,routing_settings,shared_string_settings,simulate_navigation"/> → &#8230;|_

![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios.png) ![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

- &nbsp;_<Translate ios="true" ids="simulation_preview_mode_title"/>_ - <Translate ios="true" ids="simulation_preview_mode_desc"/>
- &nbsp;_<Translate ios="true" ids="simulation_constant_mode_title"/>_ - <Translate ios="true" ids="simulation_constant_mode_desc"/>
- &nbsp;_<Translate ios="true" ids="simulation_real_mode_title"/>_ - <Translate ios="true" ids="simulation_real_mode_desc"/>

When you click on [*Start* button](#start--stop-navigation), your simulation of navigation will start.  

To stop the simulation of navigation, you need to tap [*Navigation* button → *Cancel*](#start--stop-navigation).

</TabItem>

</Tabs>