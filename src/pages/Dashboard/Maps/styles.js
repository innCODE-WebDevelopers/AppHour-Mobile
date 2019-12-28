import styled from 'styled-components/native';
import {darken, saturate} from 'polished';
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
export const LinearModal = styled(LinearGradient).attrs(props => ({
  colors: [props.color, saturate(0.4, props.color)],
  start: {x: 0, y: 1.5},
  end: {x: 0, y: 0},
}))`
  height: 55%;
  width: 90%;
  margin-left: 20px;
  margin-top: 48%;
`;

export const ModalContainer = styled.View``;

export const ViewTop = styled.View`
  flex-direction: row;
`;

export const ViewButton = styled.View`
  align-items: flex-end;
  z-index: 1;
  background-color: #151522;
  border-radius: 25px;
  height: 30px;
  width: 30px;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0.5px 3px 0px 0px;
`;

export const Touch = styled.TouchableOpacity`
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
  position: ${props => (props.position ? props.position : 'relative')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
`;

export const ViewFooter = styled.View`
  align-items: flex-end;
  flex: 1;
`;

export const ButtonClose = styled(RectButton)``;

export const Flyer = styled.Image.attrs(props => ({
  source: props.source,
}))`
  width: 325px;
  height: 140px;
`;

export const ViewImage = styled.View`
  flex: 1;
`;

export const ButtonJoin = styled.View`
  flex-direction: row;
  width: ${props => (props.width ? props.width : '180px')};
  height: ${props => (props.height ? props.height : '40px')};
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.color ? props.color : '#9980FA')};
  border-radius: ${props => (props.radius ? props.radius : '0px')};
  border-bottom-end-radius: ${props =>
    props.radiusEnd ? props.radiusEnd : '0px'};
  border-bottom-start-radius: ${props =>
    props.radiusStart ? props.radiusStart : '0px'};
  border-radius: ${props => (props.radius ? props.radius : '0px')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
  position: ${props => (props.position ? props.position : 'relative')};
`;

export const ViewHank = styled.View`
  flex-direction: row;
`;

export const ViewTexts = styled.View`
  flex-direction: column;
`;
