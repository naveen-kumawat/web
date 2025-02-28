---
sidebar_position: 1
title:  Configure Screen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Overview  


Configure screen is a menu that allows you to configure the widgets that will be displayed on the map. Here you can enable and configure quick action widgets, information and navigation widgets, and other items.  
>**NOTE**. All widgets are [profile dependent](../personal/profiles.md), so if you change the order, visibility or state for one profile, it will not apply to other profiles. Each profile has its own predefined list of widgets based on the navigation screen design. It can be configured and used with or without navigation.

 
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_menu_andr_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_menu_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_menu_ios_2.png)  


</TabItem>

</Tabs> 


## Configure screen menu


### Widget panels

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

#### Right/Left panel widgets  
 - [Route maneuvers](../widgets/nav-widgets.md#next-turns) - shows info about next maneuvers and distance to it.
 - [Navigation point](../widgets/nav-widgets#navigation-points) (4 widgets inside) - shows the distance remaining to the last destination point or first intermediate point, the arrival time or the travel time for the calculated route. Subwidgets: *Distance to destination*, *Distance to intermediate*, *Time to intermediate*, *Time to destination*.
 - [Map markers](../map/point-layers-on-map#markers) (2 widgets inside) - show special points marked as flags on the map. Subwidgets: *First marker*, *Second marker*.
 - [Bearing](../widgets/nav-widgets.md#bearing) (3 widgets inside) - shows relative, magnetic or true bearing.
 - [Current Speed](../widgets/info-widgets.md#speed) - shows your current speed detected by GPS-sensor. Subwidgets: *Relative bearing*, *Magnetic bearing*, *True bearing*.
 - [Average speed](../widgets/info-widgets#average-speed-widget) - shows what your average speed is.
 - [Speed limit](../widgets/nav-widgets.md#speed-limit) - shows speed limit for the current following road.
 - [Altitude of current location](../widgets/info-widgets.md#altitude) - shows the height above sea level of current geolocation.
 - [GPS info](../widgets/info-widgets.md#gps-info-android) (Android) - shows a number of satellites that device detects and uses at that moment.
 - [* Trip recording](../widgets/info-widgets#-trip-recording-widgets) (4 widgets inside) - provides quick access to start / stop track recording. Subwidgets: *Distance*, *Duration*, *Uphill*, *Downhill*.
 - [Current time](../widgets/info-widgets.md#current-time) - shows current time from your device.
 - [Battery level](../widgets/info-widgets.md#battery-level) - shows battery level of your device.
 - [Radius ruler](../widgets/radius-ruler.md) - shows distance between users location and inner point of the 'Radius-ruler' tool distance-circles on the map.
 - [* FPS debug info](../widgets/info-widgets.md#-fps-info-android) (Android) - investigate how fast map & map elements are showed & refreshed.
 - [Audio/video notes](../widgets/info-widgets#-audio-video-notes-widget) (4 widgets inside) - provides quick access to start / stop taking a recording (audio / video or photo). Subwidgets: *On request*, *Record audio*, *Take a photo*.
 - [* Parking](../widgets/info-widgets.md#-parking-widget) - shows distance from the current position to the parking place.
 - [* Mapillary](../widgets/info-widgets.md#-mapillary-widget) - provides quick access to Mapillary app to add Street-Level-Imagery.  
 **Transparent widgets** - makes transparent the background of the navigation and information widgets.
 

#### Top panel widgets
 - [Coordinates widget](../widgets/info-widgets#coordinates-widget) - shows the geographic coordinates of current geo-location.
 - [Street name](../widgets/nav-widgets#street-name) - shows current street name with straight location arrow or next street name with the maneuver has to be completed.
 - [Map markers bar](../widgets/markers#top-bar-widget-markers) - show the distance and direction to the marker from current location.
 - [Lanes](../widgets/nav-widgets#lanes) - shows the current road lanes layout and highlights lanes to drive with active navigation.  

![top panel](@site/static/img/widgets/top_panel_andr.png)

#### Bottom panel widgets
 - [Elevation profile](../widgets/nav-widgets#elevation-widget) - shows the elevation and slope profile of the current route.  

![elevation profile](@site/static/img/widgets/elevation_prof_and.png)  

#### Pages for widgets

Widgets in the <Translate android="true" id="map_widget_left" /> and <Translate android="true" id="map_widget_right" /> can be grouped into **Pages**. To find options, follow these steps: *OsmAnd menu → Configure screen → Widgets (Left / Right panel) → Change order → Add pages*.

![Widget page](@site/static/img/widgets/widget_page.png) ![Widget page](@site/static/img/widgets/widget_page_1.png)
 

#### Duplicates for widgets

You can show **Duplicates** for the right and left panels at the same time, as well as for each page of widgets. To find options, follow these steps: *OsmAnd menu → Configure screen → Widgets (Left / Right panel) → Change order → "+" chosen widget*.

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)


</TabItem>

<TabItem value="ios" label="iOS">  


#### Right panel widgets 

 - [* Parking Position](../widgets/info-widgets.md#-parking-widget) - shows distance from the current position to the parking place.
 - [Intermediate destination](../widgets/nav-widgets.md#intermediate-destination) - shows current distance to the first intermediate navigation point (if present).  
 - [Intermediate arrival time](../widgets/nav-widgets.md#intermediate-arrival-time) - shows arrival time or the time left to reach first intermediate navigation point (if present).    
 - [Destination](../widgets/nav-widgets.md#destination) - shows current distance to the finish point.  
 - [Arrival time](../widgets/nav-widgets.md#arrival-time-or-time-to-go) - shows arrival time or time left to complete navigation i.e. reach the final destination point.  
 - [Relative bearing](../widgets/nav-widgets.md#bearing) - shows relative or magnetic bearing.
 - [* Mapillary](../widgets/info-widgets.md#-mapillary-widget) - provides quick access to Mapillary app to add Street-Level-Imagery.
 - [Speed](../widgets/info-widgets.md#speed) - shows your current speed detected by GPS-sensor.
 - [Speed limit](../widgets/nav-widgets.md#speed-limit) - shows speed limit for the current following road.
 - [Altitude](../widgets/info-widgets.md#altitude) - shows the height above sea level of current geolocation.
 - [* Track recording](../widgets/info-widgets.md#-trip-recording-widget) - provides quick access to start / stop track recording.   
 - [Current time](../widgets/info-widgets.md#current-time) - shows current time from your device.  
 - [Battery level](../widgets/info-widgets.md#battery-level) - shows battery level of your device.  
 - [Radius ruler](../widgets/radius-ruler.md) - shows distance between users location and inner point of the 'Radius-ruler' tool distance-circles on the map.  
 

#### Left panel widgets  
 - [Compass](../widgets/map-buttons.md#compass) - indicates how the map is oriented on the device screen.
 - [Next turns](../widgets/nav-widgets.md#next-turns) - shows info about next maneuvers and distance to it.
 - [Next turns (small)](../widgets/nav-widgets.md#next-turns) - shows info about next maneuvers and distance to it.
 - [Second next turn](../widgets/nav-widgets.md#next-turns) - shows info about next maneuvers and distance to it.

[Quick action](../widgets/quick-action.md) - is a button that gives quick access to frequently used actions.  

![Configure screen menu](@site/static/img/widgets/quick_act_ios.png)  


Most of the widgets could be configured as:
* Show – widget is visible on the map screen
* Hide – widget is hidden from the map screen
* Collapse – creates a group of "collapsible" widgets and a button to quickly expand / collapse them on the maps screen.
  

</TabItem>

</Tabs>  


### Buttons and Remaining elements

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  


- [Compass](../widgets/map-buttons.md#compass) - indicates how the map is oriented on the device 
- [Distance by tap](../widgets/radius-ruler.md#distance-by-tap-tool) - gives options to measure the distance from your position to the selected point.  

[Quick action](../widgets/quick-action.md) - is a button that gives quick access to frequently used actions.  

![Configure screen menu](@site/static/img/widgets/quick_act_andr.png) 


</TabItem>

<TabItem value="ios" label="iOS">  


- [Street name](../widgets/nav-widgets.md#street-name) combined with [Approach POI](../widgets/nav-widgets.md#approach-poisfavorites) - displays street name of the current or next following road, displays information about approaching POI / favourites along the road.
- [**Coordinates widget**](../widgets/info-widgets.md#coordinates-widget) -  shows the geographic coordinates of current geolocation (appears on the top bar).
- [**Distance by tap**](../widgets/radius-ruler.md#distance-by-tap-tool) - gives options to measure the distance from your position to the selected point.
- [**Map markers**](../widgets/markers.md) - shows a directional line from your position to the active marker locations (could be on the top bar or on the right widget panel).
- **Transparent widgets** - makes transparent the background of the navigation and information widgets.  
- [**Lanes**](../widgets/nav-widgets.md#lanes) - shows the lanes you have to drive during a navigation with distance to a maneuver.



</TabItem>

</Tabs> 

### Actions panel  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- **Reset to default** - return to preset settings.
- **Copy from another profile** - allows you to copy settings made for another profile


</TabItem>

<TabItem value="ios" label="iOS">  

>NOTE. These features are not available for iOS.


</TabItem>

</Tabs>               




## Read more
  [Read more information about each widget individually](../widgets/index.md).
