import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
export const BackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  align-items: center;
  padding-top: 20;
`;

export const Button = styled(RectButton)`
  width: ${props => (props.width ? props.width : '180px')};
  height: ${props => (props.height ? props.height : '40px')};
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.color ? props.color : '#9980FA')};
  border-radius: ${props => (props.radius ? props.radius : '5px')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
  position: ${props => (props.position ? props.position : 'relative')};
`;
export const TextAll = styled.Text`
  text-shadow: ${props => (props.shadow ? props.shadow : 'none')}
  font-weight : ${props => (props.weight ? 'bold' : 'normal')}
  font-family: ${props => (props.font ? props.font : 'system font')}
  color: ${props => (props.color ? props.color : '#000')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  font-size: ${props => (props.size ? props.size : '15px')};
  margin-left: ${props => (props.left ? props.left : '0px')};
  margin-right: ${props => (props.right ? props.right : '0px')};
  margin-top: ${props => (props.top ? props.top : '0px')};
  padding: ${props => (props.padding ? props.padding : '0px')};
`;

export const Input = styled.TextInput.attrs(props => ({
  secureTextEntry: props.pass,
  placeholder: props.placeholder,
  keyboardType: props.keyboardType,
}))`
  width: 280px;
  height: 40px;
  border-radius: 5px;
  color: #000
  background-color: #fff;
  margin-bottom: 20px;
  padding-left: 20px;
`;
