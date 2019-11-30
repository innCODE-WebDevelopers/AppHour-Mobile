import React, {Component, useEffect, useState} from 'react';

import {NavigationActions} from 'react-navigation';

import {
  Container,
  Linear,
  Button,
  InternalView,
  OutsideView,
  ViewButtom,
  TopView,
  Icons,
  Avatar,
} from './styles';
import {TextAll} from '../../../assets/global_styles';

const Menu = ({navigation}) => {
  const [boldText, setBold] = useState('Maps');
  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    setBold(route);
    if (route === 'Maps') {
      navigation.closeDrawer();
      navigation.dispatch(navigateAction);
    } else {
      navigation.dispatch(navigateAction);
    }
  };
  return (
    <Container>
      <Linear
        color={['#C93B7A', '#9F3384', '#7D419A']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}>
        <TopView>
          <Avatar />
          <TextAll top={10} font={'Roboto-Light'} color={'#fff'}>
            Wellcome Kelvin R.C
          </TextAll>
        </TopView>

        <OutsideView>
          <ViewButtom>
            <Button onPress={navigateToScreen('Maps')}>
              <InternalView>
                {/* <Icons name={'location-city'} size={24} color="#fff" /> */}
                <TextAll
                  weight={boldText === 'Maps' ? true : false}
                  size={20}
                  font={'Roboto-Light'}
                  color={'#fff'}>
                  Maps
                </TextAll>
              </InternalView>
            </Button>
          </ViewButtom>

          <ViewButtom>
            <Button onPress={navigateToScreen('Friends')}>
              <InternalView>
                {/* <Icons name={'group'} size={24} color="#fff" /> */}
                <TextAll
                  weight={boldText === 'Friends' ? true : false}
                  size={20}
                  font={'Roboto-Light'}
                  color={'#fff'}>
                  My Friends
                </TextAll>
              </InternalView>
            </Button>
          </ViewButtom>

          <ViewButtom>
            <Button onPress={navigateToScreen('Feed')}>
              <InternalView>
                {/* <Icons name={'insert-comment'} size={24} color="#fff" /> */}
                <TextAll
                  weight={boldText === 'Feed' ? true : false}
                  size={20}
                  font={'Roboto-Light'}
                  color={'#fff'}>
                  Feed
                </TextAll>
              </InternalView>
            </Button>
          </ViewButtom>

          <ViewButtom>
            <Button onPress={navigateToScreen('Events')}>
              <InternalView>
                {/* <Icons name={'local-bar'} size={24} color="#fff" /> */}
                <TextAll
                  weight={boldText === 'Events' ? true : false}
                  size={20}
                  font={'Roboto-Light'}
                  color={'#fff'}>
                  Events
                </TextAll>
              </InternalView>
            </Button>
          </ViewButtom>

          <ViewButtom>
            <Button onPress={navigateToScreen('Favorite')}>
              <InternalView>
                {/* <Icons name={'favorite'} size={24} color="#fff" /> */}
                <TextAll
                  weight={boldText === 'Favorite' ? true : false}
                  size={20}
                  font={'Roboto-Light'}
                  color={'#fff'}>
                  Favorite
                </TextAll>
              </InternalView>
            </Button>
          </ViewButtom>

          <ViewButtom>
            <Button onPress={navigateToScreen('Account')}>
              <InternalView>
                {/* <Icons name={'settings'} size={24} color="#fff" /> */}
                <TextAll
                  weight={boldText === 'Account' ? true : false}
                  size={20}
                  font={'Roboto-Light'}
                  color={'#fff'}>
                  Account
                </TextAll>
              </InternalView>
            </Button>
          </ViewButtom>

          <ViewButtom top={68}>
            <Button onPress={navigateToScreen('Main')}>
              <InternalView>
                {/* <Icons name={'keyboard-backspace'} size={24} color="#fff" /> */}
                <TextAll size={20} font={'Roboto-Light'} color={'#fff'}>
                  logout
                </TextAll>
              </InternalView>
            </Button>
          </ViewButtom>
        </OutsideView>
      </Linear>
    </Container>
  );
};

export default Menu;
