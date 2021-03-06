import React, {useState} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Linear, ViewTop, ViewHeader, ViewFooter} from './styles';
import {TextAll} from '~/../assets/global_styles';

const Payment = ({navigation}) => {
  return (
    <Linear color={['#171826', '#202334']}>
      <Container>
        <ViewTop>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Maps');
            }}>
            <Icon color={'#fff'} name={'arrow-back'} size={28} />
          </TouchableOpacity>

          <TextAll size={18} font={'Roboto-Light'} color={'#fff'} />

          <TextAll size={18} font={'Roboto-Light'} color={'#fff'}>
            Payment
          </TextAll>
        </ViewTop>

        <Linear radiusLeft={25} radiusRight={25} color={['#171922', '#171922']}>
          <ViewHeader>
            <ScrollView>
              <TextAll size={18} font={'NunitoSans-SemiBold'} color={'#fff'}>
                Buy your ticket now
              </TextAll>
            </ScrollView>
          </ViewHeader>

          <ViewFooter />
        </Linear>
      </Container>
    </Linear>
  );
};

Payment.navigationOptions = ({navigation}) => {
  return {
    title: 'Payment',
    tabBarIcon: ({focused}) => {
      if (focused) {
        return <Icon name={'payment'} size={28} color="#9980FA" />;
      } else {
        return <Icon name={'payment'} size={28} color="#808080" />;
      }
    },
  };
};

export default Payment;
