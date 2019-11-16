import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Slider from '~/pages/steps_slider';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Slider,
  }),
);

export default Routes;
