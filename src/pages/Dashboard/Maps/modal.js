import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ModalView,
  ViewButton,
  ButtonClose,
  Touch,
  ViewTop,
  Flyer,
  LinearModal,
} from './styles';
import Event1 from '../../../../assets/image/event1.png';
import {TextAll, Button} from '../../../../assets/global_styles';

const Modal = ({modal, setModal, event}) => {
  return (
    <ModalView visible={modal} animationType={'slide'} transparent={true}>
      <LinearModal color={'#21213d'}>
        <ViewTop>
          <TextAll top={10} left={15} weight={'bold'} color={'#fff'}>
            {event.title}
          </TextAll>
          <ViewButton>
            <Touch onPress={() => setModal(false)}>
              <ButtonClose>
                <Icon name="close" size={25} color={'#7049c1'} />
              </ButtonClose>
            </Touch>
          </ViewButton>
        </ViewTop>

        <Flyer source={Event1} />

        <TextAll top={10} left={10} right={10} color={'#fff'}>
          {event.description}
        </TextAll>
        <TextAll top={5} left={10} color={'#fff'}>
          Date: {event.date_event}
        </TextAll>
        <TextAll top={5} left={10} color={'#fff'}>
          Ranking: {event.classification}
        </TextAll>

        <Touch
          position={'absolute'}
          marginTop={210}
          marginLeft={280}
          onPress={() => alert('Presença confirmada')}>
          <Button width={35} height={35} radius={20}>
            <Icon name="arrow-forward" color={'#fff'} size={20} />
          </Button>
        </Touch>
      </LinearModal>
    </ModalView>
  );
};

export default Modal;
