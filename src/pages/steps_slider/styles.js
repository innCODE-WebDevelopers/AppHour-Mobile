import styled from 'styled-components/native';
import {darken} from 'polished';
import LinearGradient from 'react-native-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;
export const Linear = styled(LinearGradient).attrs(props => ({
  colors: [props.color, darken(0.1, props.color)],
}))`
  flex: 1;
`;

export const InternalView = styled.View`
  align-items: center;
  margin-top: 30%;
`;

export const Button = styled(RectButton)`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
