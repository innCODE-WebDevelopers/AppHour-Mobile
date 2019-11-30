import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Text, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton, Container, ViewButtom} from './styles';
import {customStyle} from './customStylesMap';

import {TextAll} from '../../../../assets/global_styles';
import Rave from '../../../../assets/image/rave.png';

import Modal from './modal';

export default function Maps({navigation}) {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});
  const [modal, setModal] = useState(false);
  const [dataEvent] = useState({
    title: 'Evento1',
    description: 'description event',
    date_event: '2019-12-25',
    classification: 4,
  });

  useEffect(() => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        onGeolocation();
      })
      .catch(err => {
        console.log('Error ' + err.message + ', Code : ' + err.code);
      });
  }, []);

  const onGeolocation = () => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setCoordinates(coords);
        setLoading(false);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: false, maximumAge: 10000, timeout: 10000},
    );
  };

  const renderPoints = () => {
    return (
      <Marker
        key={'123'}
        coordinate={{
          latitude: -24.011481,
          longitude: -46.4087262,
        }}
        tooltip
        onPress={() => setModal(true)}
        image={Rave}>
        <Modal modal={modal} setModal={setModal} dataEvent={dataEvent} />
      </Marker>
    );
  };
  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Container>
          <MapView
            showsUserLocation
            rotateEnabled={false}
            followsUserLocation={true}
            initialRegion={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0168,
              longitudeDelta: 0.0168,
            }}
            style={{...StyleSheet.absoluteFillObject}}
            customMapStyle={customStyle}>
            {renderPoints()}
          </MapView>
          <ViewButtom>
            <IconButton onPress={() => navigation.openDrawer()}>
              <Icon size={35} color={'#9980FA'} name={'menu'} />
            </IconButton>
          </ViewButtom>
        </Container>
      )}
    </Container>
  );
}
Maps.navigationOptions = {
  drawerLabel: 'Maps',
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    height: '40%',
    width: '90%',
    marginLeft: 20,
    marginTop: '60%',
    borderRadius: 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
});
