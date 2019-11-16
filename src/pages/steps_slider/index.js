import React from 'react';

import AppIntroSlider from 'react-native-app-intro-slider';
import Lottie from 'lottie-react-native';

import stepOne from '../../../assets/image/setpOne.json';
import map from '../../../assets/image/map.json';
import payment from '../../../assets/image/payment.json';

import {Container, InternalView} from './styles';
import {TextAll} from '../../../assets/global_styles';

const slides = [
  {
    key: '1',
    title: 'Wellcome',
    text: 'Discover new exclusive drinks',
    backgroundColor: '#2f3640',
    color: '#fff',
    Image: stepOne,
    size: {
      width: 300,
    },
  },
  {
    key: '2',
    title: 'Imagine',
    text: 'See all events near you',
    backgroundColor: '#2f3640',
    color: '#fff',
    Image: map,
    size: {
      width: 230,
    },
  },
  {
    key: '3',
    title: 'Facilitator',
    text: "Don't waste time in lines",
    backgroundColor: '#2f3640',
    color: '#fff',
    Image: payment,
    size: {
      width: 300,
    },
  },
];

const slide = () => {
  const _renderItem = ({item}) => {
    return (
      <Container color={item.backgroundColor}>
        <InternalView>
          <TextAll color={item.color} size={30}>
            {item.title}
          </TextAll>
          <Lottie
            style={item.size}
            source={item.Image}
            resizeMode="contain"
            autoPlay
            loop
          />
          <TextAll color={item.color} size={20}>
            {item.text}
          </TextAll>
        </InternalView>
      </Container>
    );
  };
  return <AppIntroSlider renderItem={_renderItem} slides={slides} />;
};

export default slide;
