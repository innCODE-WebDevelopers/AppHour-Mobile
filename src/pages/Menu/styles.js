import styled from 'styled-components/native';
import {darken} from 'polished';
import LinearGradient from 'react-native-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import avatar from '../../../assets/image/avatar.jpg';

export const Container = styled.View`
  flex: 1;
`;
export const Linear = styled(LinearGradient).attrs(props => ({
  colors: [props.color, darken(0.1, props.color)],
}))`
  flex: 1;
`;

export const TopView = styled.View`
  justify-content: center;
  align-items: center;
  height: 20%;
  background-color: #fff
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
  flex-direction: column;
`;

export const Avatar = styled.Image.attrs(props => ({
  source: props.avatar ? props.avatar : avatar,
}))`
  width: ${props => (props.widht ? props.widht : '50px')}
  height: ${props => (props.height ? props.height : '50px')}
  border-radius: ${props => (props.radius ? props.radius : '25px')}
`;

export const OutsideView = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const InternalView = styled.View`
  padding-left: 15px;
  flex-direction: row;
`;
export const ViewButtom = styled.View`
  margin-top: ${props => (props.top ? props.top : '2px')};
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 50px;

  justify-content: center;
`;

export const Icons = styled(Icon).attrs(props => ({
  name: props.name,
  size: props.size,
  color: props.color,
}))`
  margin-right: 10px;
  margin-top: -2px;
`;
