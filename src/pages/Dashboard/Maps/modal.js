import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ModalView,
  ModalContainer,
  ViewButton,
  ButtonClose,
  Touch,
} from './styles';
import Event1 from '../../../../assets/image/event1.png';

const Modal = ({modal, setModal, dataEvent}) => {
  return (
    <ModalView visible={modal} animationType={'slide'} transparent={true}>
      <ModalContainer>
        <ViewButton>
          <Touch onPress={() => setModal(false)}>
            <ButtonClose>
              <Icon name="close" size={25} color={'#7049c1'} />
            </ButtonClose>
          </Touch>
        </ViewButton>
        <View>
          <Image
            source={Event1}
            style={{marginLeft: 10, width: 300, height: 100, borderRadius: 10}}
          />
          <Text style={{marginLeft: 15, marginTop: 5}}>{dataEvent.title}</Text>
          <Text style={{marginLeft: 15, marginTop: 5}}>
            description: {dataEvent.description}
          </Text>
          <Text style={{marginLeft: 15, marginTop: 5}}>
            date: {dataEvent.date_event}
          </Text>
          <Text style={{marginLeft: 15, marginTop: 5}}>
            Ranking: {dataEvent.classification}
          </Text>
        </View>
      </ModalContainer>
    </ModalView>
  );
};

export default Modal;
