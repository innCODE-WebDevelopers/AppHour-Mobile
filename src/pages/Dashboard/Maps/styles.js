import styled from 'styled-components/native';
import {darken} from 'polished';
import LinearGradient from 'react-native-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

export const Container = styled.View.attrs({
  ...StyleSheet.absoluteFill,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Linear = styled(LinearGradient).attrs(props => ({
  colors: [props.color, darken(0.1, props.color)],
}))`
  flex: 1;
`;

export const ViewMarker = styled.View`
  background-color: #fff;
  width: 200px;
  height: 120px;
  flex-direction: column;
  border-radius: 4px;
`;

export const ViewTitle = styled.View`
  align-items: center;
`;
export const Viewfooter = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: ${props => (props.top ? props.top : '0px')};
`;

export const IconButton = styled(RectButton)`
  width: 35px;
  height: 35px;
  align-items: flex-start;
  position: absolute;
`;

export const ViewButtom = styled.View`
  flex: 1;
  margin-left: -90%;
  margin-top: 5%;
`;
