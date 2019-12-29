import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {darken} from 'polished';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View.attrs({
  ...StyleSheet.absoluteFill,
})`
  flex: 1;
`;

export const Linear = styled(LinearGradient).attrs(props => ({
  colors: props.color,
  start: {x: 0, y: 1},
  end: {x: 0, y: 0},
}))`
  flex: 1;
  border-top-left-radius: ${props =>
    props.radiusLeft ? props.radiusLeft : '0px'};
  border-top-right-radius: ${props =>
    props.radiusRight ? props.radiusRight : '0px'};
`;

export const ViewTop = styled.View`
  align-items: flex-start;
  padding: 15px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ViewHeader = styled.SafeAreaView`
  height: 90%;
  padding: 20px;
`;

export const Flyer = styled.Image.attrs(props => ({
  source: props.source,
}))`
  width: 325px;
  height: 190px;
  border-radius: 10px;
`;

export const ViewImage = styled.View`
  flex: 1;
  margin-top: 15px;
`;

export const ViewFooter = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px;
  justify-content: flex-end;
`;

export const MenuFooter = styled.View`
  background-color: #fff;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding: 11px 15px 0px 15px;
`;

export const MessagesView = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 30px;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  shadow-color: #000;
  shadow-radius: 5px;
  elevation: 10;
`;

export const FriendMessagesView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Avatar = styled.Image.attrs(props => ({
  source: props.source,
}))`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 5px;
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
`;

export const MessageFriend = styled.Text`
  margin-top: 6px;
  margin-left:10px
  color: #fff;
  font-size: 13px;
`;

export const MyMessage = styled.Text`
  margin-top: 6px;
  margin-left:10px
  color: #fff;
  font-size: 13px;
`;

export const MyMessagesView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 15px;
`;

export const InputMessage = styled.TextInput.attrs(props => ({
  placeholder: props.placeholder,
  underlineColorAndroid: 'transparent',
}))`
  background-color: #dadada;
  color: #000;
  width: 85%;
  height: 35px;
  border-radius: 4px;
  padding: 0px 0px 0px 14px;
`;

export const ViewMessage = styled.View`
  flex: 1;
  background-color: ${props => (props.background ? props.background : '#fff')};
  border-radius: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ViewButtom = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
  enabled: true,
})`
  margin-left: 10px;
  padding: 4px;
`;
