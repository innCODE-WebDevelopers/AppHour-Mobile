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
            <TextAll font={'Roboto-Light'} color={'#fff'}>
              Bem-Vindo
            </TextAll>
          </TopView>

          <OutsideView>
            <ViewButtom>
              <Button onPress={this.navigateToScreen('Dashboard')}>
                <InternalView>
                  <Icons name={'map'} size={25} color="#fff" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    Maps
                  </TextAll>
                </InternalView>
              </Button>
            </ViewButtom>

            <ViewButtom>
              <Button onPress={this.navigateToScreen('Account')}>
                <InternalView>
                  <Icons name={'settings'} size={25} color="#fff" />
                  <TextAll font={'NunitoSans-SemiBold'} color={'#fff'}>
                    Account
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
