import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20;
`;
export const BackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  align-items: center;
  padding-top: 20;
`;

export const Button = styled(RectButton)`
  width: 180px;
  height: 40px;
  align-items: center;
  justify-content: center
  background-color: #f7ca18;
  border-radius: 5px;
`;
export const TextAll = styled.Text`
  color: ${props => (props.color ? props.color : '#000')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  font-size: ${props => (props.size ? props.size : '15px')};
  margin-left: ${props => (props.left ? props.left : '0px')};
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-top: 20%;
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