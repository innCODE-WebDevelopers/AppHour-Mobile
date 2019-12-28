import React from 'react';
import {Marker, Callout} from 'react-native-maps';
import StarRating from 'react-native-star-rating';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {
  ModalView,
  ViewButton,
  Touch,
  ViewTop,
  Flyer,
  LinearModal,
  ButtonJoin,
  ViewImage,
  ViewHank,
  ViewTexts,
} from './styles';

import {TextAll} from '../../../../assets/global_styles';
import Rave from '../../../../assets/image/iconMarker.png';
import Event1 from '../../../../assets/image/event1.png';

const renderPoints = ({dataEvent, setEvent, navigation}) => {
  const setModal = id => {
    const event = dataEvent.map(e => {
      if (e.id === id) {
        e.modal = !e.modal;
      }
      return e;
    });
    setEvent(event);
  };
  const navigiteViewVisit = ({event}) => {
    setModal(event.id);
    navigation.navigate('EventsMap', {
      event,
    });
  };
  return dataEvent.map(event => (
    <Marker
      key={event.id}
      coordinate={{
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
      }}
      onPress={() => setModal(event.id)}
      tooltip={true}
      image={Rave}>
      <Callout>
        <ModalView
          visible={event.modal}
          animationType={'slide'}
          transparent={true}>
          <LinearModal color={'#151522'}>
            <ViewTop>
              <ViewImage>
                <Flyer source={Event1} />
              </ViewImage>

              <ViewButton>
                <Touch onPress={() => setModal(event.id)}>
                  <Icon2
                    name="ios-close-circle-outline"
                    size={28}
                    color={'#fff'}
                  />
                </Touch>
              </ViewButton>
            </ViewTop>

            <TextAll
              size={18}
              font={'NunitoSans-SemiBold'}
              weight={'bold'}
              top={10}
              left={10}
              color={'#fff'}>
              {event.title}
            </TextAll>
            <ViewTexts>
              <TextAll
                weight={'bold'}
                font={'Roboto-Light'}
                top={10}
                left={10}
                right={10}
                color={'#fff'}>
                Description:
              </TextAll>
              <TextAll
                font={'Roboto-Light'}
                left={10}
                right={10}
                color={'#fff'}>
                {event.description}
              </TextAll>
            </ViewTexts>

            <TextAll
              weight={'bold'}
              font={'Roboto-Light'}
              top={5}
              left={10}
              color={'#fff'}>
              Hour:{' '}
              <TextAll font={'Roboto-Light'} top={5} left={10} color={'#fff'}>
                {event.date_event}
              </TextAll>
            </TextAll>

            <ViewHank>
              <TextAll
                weight={'bold'}
                font={'Roboto-Light'}
                top={5}
                left={10}
                color={'#fff'}>
                Ranking:
              </TextAll>
              <StarRating
                starStyle={{marginLeft: 3}}
                containerStyle={{marginLeft: 5, marginTop: 5}}
                starSize={20}
                disabled={true}
                maxStars={6}
                rating={event.classification}
                fullStarColor={'#FEDE3B'}
              />
            </ViewHank>
            <Touch
              position={'absolute'}
              marginTop={307}
              marginLeft={0}
              onPress={() => navigiteViewVisit({event: event})}>
              <ButtonJoin
                width={324}
                color={'#9980FA'}
                height={45}
                radiusStart={20}
                radiusEnd={20}
                marginTop={50}>
                <TextAll size={20} top={0} right={10} color={'#fff'}>
                  Join
                </TextAll>
              </ButtonJoin>
            </Touch>
          </LinearModal>
        </ModalView>
      </Callout>
    </Marker>
  ));
};

export default renderPoints;
