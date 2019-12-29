import React from 'react';
import {Dimensions} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Menu from '~/pages/Menu';

import Main from '~/pages/Main';
import Slider from '~/pages/steps_slider';

import Maps from '~/pages/Dashboard/Maps';
import Account from '~/pages/Dashboard/Account';
import Events from '~/pages/Dashboard/Events';
import Favorite from '~/pages/Dashboard/Favorite';
import Feed from '~/pages/Dashboard/Feed';
import Friends from '~/pages/Dashboard/Friends';

import EventsMap from '~/pages/Dashboard/Maps/EventsMap';
import Chat from '~/pages/Dashboard/Maps/EventsMap/chat';
import Payment from '~/pages/Dashboard/Maps/EventsMap/Payment';

const Width = Math.round(Dimensions.get('window').width);

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createDrawerNavigator(
      {
        Maps,
        Friends,
        Feed,
        Events,
        Favorite,
        Account,
        Event: createBottomTabNavigator(
          {
            EventsMap,
            Chat,
            Payment,
          },
          {
            tabBarOptions: {
              showLabel: false,
              activeTintColor: '#9980FA',
              inactiveTintColor: '#808080',
              style: {
                backgroundColor: '#fff',
              },
            },
          },
        ),
      },
      {
        drawerWidth: Width,
        contentComponent: Menu,
        initialRouteName: 'Maps',
        animationEnabled: true,
        contentOptions: {
          activeTintColor: '#fff',
          inactiveTintColor: '#808080',
          activeBackgroundColor: '#617E8C',
          itemsContainerStyle: {
            marginTop: 50,
          },
        },
      },
    ),
    Sign: createSwitchNavigator({
      Main,
      Slider,
    }),
  }),
);

export default Routes;
