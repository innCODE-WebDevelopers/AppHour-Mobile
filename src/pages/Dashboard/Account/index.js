import React from 'react';
import {View} from 'react-native';

import {TextAll} from '../../../../assets/global_styles';
export default function Account() {
  return (
    <View>
      <TextAll font={'NunitoSans-SemiBold'} color={'#000'}>
        Account
      </TextAll>
    </View>
  );
}
Account.navigationOptions = {
  drawerLabel: 'Account',
};
