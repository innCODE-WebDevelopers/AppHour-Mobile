import React from 'react';
import {View} from 'react-native';

import {Linear, Container} from './styles';
import {TextAll} from '../../../../assets/global_styles';

export default function Maps() {
  return (
    <Container>
      <Linear color={'#49388a'}>
        <TextAll font={'Roboto-Light'} color={'#fff'}>
          Maps
        </TextAll>
      </Linear>
    </Container>
  );
}
Maps.navigationOptions = {
  drawerLabel: 'Maps',
};
