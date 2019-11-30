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

export const ModalView = styled.Modal.attrs(props => ({
  visible: props.visible,
  animationType: props.animationType,
  onRequestClose: props.onRequestClose,
  transparent: props.transparent,
}))`
  width: 40px;
  height: 40px;
`;

export const ModalContainer = styled.View`
  background-color: #fff;
  height: 40%;
  width: 90%;
  margin-left: 20px;
  margin-top: 60%;
  border-radius: 20px;
`;

export const ViewButton = styled.View`
  align-items: flex-end;
`;

export const ButtonClose = styled(RectButton)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Touch = styled.TouchableOpacity``;
