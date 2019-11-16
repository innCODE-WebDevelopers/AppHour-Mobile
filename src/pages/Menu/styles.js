import styled from 'styled-components/native';
import {darken} from 'polished';
import LinearGradient from 'react-native-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  margin-top: 2px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
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
