import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AppIntroSlider from 'react-native-app-intro-slider';
import Lottie from 'lottie-react-native';

import stepOne from '../../../assets/image/setpOne.json';
import map from '../../../assets/image/map.json';
import payment from '../../../assets/image/payment.json';

import {Container, InternalView, Linear, Button} from './styles';
import {TextAll} from '../../../assets/global_styles';

const slides = [
  {
    key: '1',
    title: 'Wellcome',
    text: 'Discover new exclusive drinks',
    backgroundColor: '#9980FA',
    color: '#fff',
    Image: stepOne,
    size: {
      width: 300,
      marginBottom: 4,
    },
  },
  {
    key: '2',
    title: 'Imagine',
    text: 'See all events near you',
    backgroundColor: '#9980FA',
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
    backgroundColor: '#9980FA',
    color: '#fff',
    Image: payment,
    size: {
      width: 300,
      marginBottom: 58,
    },
  },
];

const slide = () => {
  const _renderNextButton = () => {
    return (
      <Button>
        <Icon
          name="arrow-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </Button>
    );
  };
  const _renderDoneButton = () => {
    return (
      <Button>
        <Icon
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </Button>
    );
  };
  const _renderItem = ({item}) => {
    return (
      <Container>
        <Linear color={item.backgroundColor}>
          <InternalView>
            <TextAll color={item.color} font={'NunitoSans-SemiBold'} size={30}>
              {item.title}
            </TextAll>
            <Lottie
              style={item.size}
              source={item.Image}
              resizeMode="contain"
              autoPlay
              loop
            />
            <TextAll color={item.color} font={'Roboto-Light'} size={20}>
              {item.text}
            </TextAll>
          </InternalView>
        </Linear>
      </Container>
    );
  };
  return (
    <AppIntroSlider
      renderItem={_renderItem}
      slides={slides}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
    />
  );
};

export default slide;
