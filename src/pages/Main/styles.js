import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Touch = styled.TouchableOpacity``;

export const Footer = styled.View`
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
`;

export const StepOne = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-top: 30%;
  display: ${props => (!props.register ? 'flex' : 'none')};
  flex: 1;
  align-items: center;
`;

export const StepTwo = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-top: 30%;
  display: ${props => (props.register ? 'flex' : 'none')};
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 65px;
  margin-top: 20%;
  font-family: Blank Smile;
`;
