import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import Menu from '~/pages/Menu';

import Main from '~/pages/Main';
import Slider from '~/pages/steps_slider';

import Dashboard from '~/pages/Dashboard';
import Account from '~/pages/Account';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createDrawerNavigator(
      {
        Dashboard,
        Account,
      },
      {
        drawerWidth: 180,
        contentComponent: Menu,
        initialRouteName: 'Dashboard',
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
