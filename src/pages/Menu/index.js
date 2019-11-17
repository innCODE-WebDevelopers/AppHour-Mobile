import React, {Component} from 'react';

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

export default class Menu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    if (route === 'Home') {
      this.props.navigation.closeDrawer();
      this.props.navigation.dispatch(navigateAction);
    } else {
      this.props.navigation.dispatch(navigateAction);
    }
  };

  render() {
    return (
      <Container>
        <Linear color={'#9980FA'}>
          <TopView>
            <Avatar />
            <TextAll font={'Roboto-Light'} color={'#000'}>
              Wellcome
            </TextAll>
          </TopView>

          <OutsideView>
            <ViewButtom>
              <Button onPress={this.navigateToScreen('Maps')}>
                <InternalView>
                  <Icons name={'location-city'} size={25} color="#130f40" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    Maps
                  </TextAll>
                </InternalView>
              </Button>
            </ViewButtom>

            <ViewButtom>
              <Button onPress={this.navigateToScreen('Friends')}>
                <InternalView>
                  <Icons name={'group'} size={25} color="#74b9ff" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    Friends
                  </TextAll>
                </InternalView>
              </Button>
            </ViewButtom>

            <ViewButtom>
              <Button onPress={this.navigateToScreen('Feed')}>
                <InternalView>
                  <Icons name={'insert-comment'} size={25} color="#c7ecee" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    Feed
                  </TextAll>
                </InternalView>
              </Button>
            </ViewButtom>

            <ViewButtom>
              <Button onPress={this.navigateToScreen('Events')}>
                <InternalView>
                  <Icons name={'local-bar'} size={25} color="#f9ca24" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    Events
                  </TextAll>
                </InternalView>
              </Button>
            </ViewButtom>

            <ViewButtom>
              <Button onPress={this.navigateToScreen('Favorite')}>
                <InternalView>
                  <Icons name={'favorite'} size={25} color="#d63031" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    Favorite
                  </TextAll>
                </InternalView>
              </Button>
            </ViewButtom>

            <ViewButtom>
              <Button onPress={this.navigateToScreen('Account')}>
                <InternalView>
                  <Icons name={'settings'} size={25} color="#CCC" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    Account
                  </TextAll>
                </InternalView>
              </Button>
            </ViewButtom>

            <ViewButtom top={72}>
              <Button onPress={this.navigateToScreen('Account')}>
                <InternalView>
                  <Icons name={'keyboard-backspace'} size={25} color="#fff" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    logout
                  </TextAll>
                </InternalView>
              </Button>
            </ViewButtom>
          </OutsideView>
        </Linear>
      </Container>
    );
  }
}
