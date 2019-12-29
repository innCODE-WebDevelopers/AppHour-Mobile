import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Linear,
  ViewTop,
  ViewHeader,
  ViewFooter,
  MessagesView,
  FriendMessagesView,
  Avatar,
  UserName,
  MessageFriend,
  MyMessage,
  MyMessagesView,
  InputMessage,
  ViewMessage,
  ScrollView,
  ViewButtom,
} from './styles';
import {TextAll} from '~/../assets/global_styles';
import AvatarIcon from '~/../assets/image/avatar.jpg';
const Chat = ({navigation}) => {
  return (
    <Linear color={['#171826', '#202334']}>
      <Container>
        <ViewTop>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Maps');
            }}>
            <Icon color={'#fff'} name={'arrow-back'} size={28} />
          </TouchableOpacity>

          <TextAll size={18} font={'Roboto-Light'} color={'#fff'}>
            Chat
          </TextAll>
        </ViewTop>

        <Linear radiusLeft={25} radiusRight={25} color={['#fff', '#fff']}>
          <ViewHeader>
            <TextAll size={18} font={'NunitoSans-SemiBold'} color={'#171922'}>
              Event chat
            </TextAll>
            <MessagesView>
              <ScrollView>
                <FriendMessagesView>
                  <Avatar source={AvatarIcon} />
                  <UserName>Amigo_Amigo_Amigo :</UserName>
                </FriendMessagesView>

                <ViewMessage background={'#011f4b'}>
                  <MessageFriend>
                    Olá, boa noite a todos, curtem muito e mulheres não
                    estraguem role dos cara
                  </MessageFriend>
                </ViewMessage>

                <MyMessagesView>
                  <Avatar source={AvatarIcon} />
                  <UserName>Eu_eu_eu :</UserName>
                </MyMessagesView>
                <ViewMessage background={'#005b96 '}>
                  <MyMessage>
                    Olá, boa noite a todos, curtem muito e mulheres não
                    estraguem role dos cara
                  </MyMessage>
                </ViewMessage>
                <FriendMessagesView>
                  <Avatar source={AvatarIcon} />
                  <UserName>Amigo_Amigo_Amigo :</UserName>
                </FriendMessagesView>

                <ViewMessage background={'#011f4b'}>
                  <MessageFriend>
                    Olá, boa noite a todos, curtem muito e mulheres não
                    estraguem role dos cara
                  </MessageFriend>
                </ViewMessage>

                <MyMessagesView>
                  <Avatar source={AvatarIcon} />
                  <UserName>Eu_eu_eu :</UserName>
                </MyMessagesView>
                <ViewMessage background={'#005b96 '}>
                  <MyMessage>
                    Olá, boa noite a todos, curtem muito e mulheres não
                    estraguem role dos cara
                  </MyMessage>
                </ViewMessage>
                <FriendMessagesView>
                  <Avatar source={AvatarIcon} />
                  <UserName>Amigo_Amigo_Amigo :</UserName>
                </FriendMessagesView>

                <ViewMessage background={'#011f4b'}>
                  <MessageFriend>
                    Olá, boa noite a todos, curtem muito e mulheres não
                    estraguem role dos cara
                  </MessageFriend>
                </ViewMessage>

                <MyMessagesView>
                  <Avatar source={AvatarIcon} />
                  <UserName>Eu_eu_eu :</UserName>
                </MyMessagesView>
                <ViewMessage background={'#005b96 '}>
                  <MyMessage>
                    Olá, boa noite a todos, curtem muito e mulheres não
                    estraguem role dos cara Olá, boa noite a todos, curtem muito
                    e mulheres não estraguem role dos cara Olá, boa noite a
                    todos, curtem muito e mulheres não estraguem role dos cara
                    Olá, boa noite a todos, curtem muito e mulheres não
                    estraguem role dos cara Olá, boa noite a todos, curtem muito
                    e mulheres não estraguem role dos cara Olá, boa noite a
                    todos, curtem muito e mulheres não estraguem role dos cara
                  </MyMessage>
                </ViewMessage>
              </ScrollView>
            </MessagesView>
          </ViewHeader>

          <ViewFooter>
            <InputMessage placeholder={'Add comments ...'} />
            <ViewButtom>
              <TouchableOpacity>
                <Icon name="send" size={23} color={'#9980FA'} />
              </TouchableOpacity>
            </ViewButtom>
          </ViewFooter>
        </Linear>
      </Container>
    </Linear>
  );
};

Chat.navigationOptions = ({navigation}) => {
  return {
    title: 'Chat',
    tabBarIcon: ({focused}) => {
      if (focused) {
        return <Icon name={'chat-bubble-outline'} size={28} color="#9980FA" />;
      } else {
        return <Icon name={'chat-bubble-outline'} size={28} color="#808080" />;
      }
    },
  };
};
export default Chat;
