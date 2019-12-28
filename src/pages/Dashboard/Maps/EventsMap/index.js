import React, {useState} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Linear,
  ViewTop,
  ViewHeader,
  ViewImage,
  Flyer,
  ViewFooter,
  MenuFooter,
} from './styles';
import {TextAll} from '~/../assets/global_styles';

import Event1 from '../../../../../assets/image/event1.png';

import {handleViewController} from './events-map-controller';

const EventsMap = ({navigation}) => {
  const {event} = navigation.state.params;
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

          <TextAll size={18} font={'Roboto-Light'} color={'#fff'}>
            {event.title}
          </TextAll>

          <TouchableOpacity onPress={() => {}}>
            <Icon color={'#fff'} name={'share'} size={28} />
          </TouchableOpacity>
        </ViewTop>

        <Linear radiusLeft={25} radiusRight={25} color={['#171922', '#171922']}>
          <ViewHeader>
            <ScrollView>
              <TextAll size={18} font={'NunitoSans-SemiBold'} color={'#fff'}>
                Welcome to an event room
              </TextAll>
              <ViewImage>
                <Flyer source={Event1} />
              </ViewImage>
            </ScrollView>
          </ViewHeader>

          <ViewFooter />
        </Linear>
      </Container>
    </Linear>
  );
};

EventsMap.navigationOptions = ({navigation}) => {
  return {
    title: 'Info',
    tabBarIcon: ({focused}) => {
      if (focused) {
        return <Icon name={'info-outline'} size={28} color="#9980FA" />;
      } else {
        return <Icon name={'info-outline'} size={28} color="#808080" />;
      }
    },
  };
};

export default EventsMap;
