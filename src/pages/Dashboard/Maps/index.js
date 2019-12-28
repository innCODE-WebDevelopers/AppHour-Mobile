import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton, Container, ViewButtom} from './styles';
import {customStyle} from './customStylesMap';

import renderPoints from './renderPoints';

export default function Maps({navigation}) {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});
  const [dataEvent, setEvent] = useState([
    {
      id: '123',
      title: 'House Mix',
      description: 'event destination on peoples whats, like music eletronic',
      date_event: '2019-12-25',
      classification: 4,
      coords: {latitude: -24.011481, longitude: -46.4087262},
      modal: false,
    },
    {
      id: '1234',
      title: 'Matilda bar',
      description:
        'Porão de rock sofisticado com bar de coquetéis e gastronomia de petiscos diversos, animado por pocket shows.',
      date_event: 'Seg a Sex das 18:00 as 04:00',
      classification: 6,
      coords: {latitude: -24.0104127, longitude: -46.4065804},
      modal: false,
    },
    {
      id: '12345',
      title: 'Casa',
      description: 'Casa',
      date_event: '2019-12-25',
      classification: 6,
      coords: {latitude: -24.0327051, longitude: -46.5080812},
      modal: false,
    },
  ]);

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

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Container>
          <MapView
            maxZoomLevel={16}
            minZoomLevel={13}
            showsCompass={true}
            showsPointsOfInterest={false}
            showsUserLocation={true}
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
            {renderPoints({dataEvent, setEvent, navigation})}
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
