---
sidebar_position: 2
title: Route parameters
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Routing types  

The routing type determines how the route will be calculated. The OsmAnd app uses different routing types for hiking, cycling, skiing or boating routes. Each profile has a specific type of routing assigned to it, which, however, you can change according to your needs: *<Translate android="true" ids="shared_string_menu,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/>, <Translate android="true" ids="app_mode_car"/>, <Translate android="true" ids="app_mode_pedestrian"/> or another one) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

The following profiles (with their own routing types) preinstalled in OsmAnd: *Driving, Cycling, Walking, Truck, Motorcycle, Public transport, Boat, Aircraft, Skiing, Horseback riding*. Although, you can create your own profiles with specific routing rules or [modify OsmAnd routing algorithm](../routing/osmand-routing.md#customize-offline-routing).  

:::note  
**Truck, Motorcycle, Moped, Aircraft, Boat and Horseback riding** profiles are switched off by default. In order to use these profiles, you need to activate them in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.  
**Direct-to-point** navigation type doesn't have its own profile and can be used with any enabled one.
:::

| Category | Description | Note |
|:------------|:---------------|:---------------|
| **[OsmAnd offline routing](./osmand-routing.md)**  |  OsmAnd offline routing mechanism uses predownloaded maps as data source for route calculation.|  Navigation types: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md),  [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Moped](./moped-routing.md), [Motorcycle](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Truck](car-based-routing#route-parameters---truck).            |
| Direct to point routing |  Also uses offline maps and provides a straight line routing (or "point-to-point" navigation)  | Navigation types: *[Straight line](./straight-line-routing.md)*,  *[Direct-to-point](./direct-to-point-routing.md)*.  |
| <Translate android="true" ids="routing_profile_broutrer"/>  |  Offline routing provided by [BRouter app](https://brouter.de/)  | Available only on **Android**. The full description read [here](./brouter.md).   |
| <Translate android="true" ids="shared_string_online"/> (Android) |  Online routing builds the route servers' resources online by the Internet connection. | Available only on **Android**. You can configure [online routing](./online-routing.md) to build a route from various online routing engines such as [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX.  |

:::info
OsmAnd offline routing can be customized by changing ([.xml file](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)). For more information see [How to customise routing .xml article](../routing/osmand-routing.md#customize-offline-routing).
:::