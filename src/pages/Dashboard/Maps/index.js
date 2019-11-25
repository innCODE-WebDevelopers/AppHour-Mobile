import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  IconButton,
  Container,
  ViewMarker,
  ViewTitle,
  Viewfooter,
  ViewButtom,
} from './styles';
import {TextAll} from '../../../../assets/global_styles';
import Rave from '../../../../assets/image/rave.png';

export default function Maps({navigation}) {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
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
  }, []);
  const renderPoints = () => {
    return (
      <Marker
        key={'123'}
        coordinate={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        }}
        tooltip
        image={Rave}>
        <Callout>
          <ViewMarker>
            <ViewTitle>
              <TextAll
                color={'#000'}
                weight={'bold'}
                font={'NunitoSans-SemiBold'}>
                Tomorrowland
              </TextAll>
              <TextAll
                top={4}
                size={10}
                color={'#808080'}
                font={'OpenSans-Regular'}>
                Music festival held annually. Your main edition is held at Boom
                in Belgium.
              </TextAll>
            </ViewTitle>
            <Viewfooter top={8}>
              <TextAll top={4} weight={'bold'} color={'#000'} size={12}>
                Producer:
              </TextAll>
              <TextAll
                left={4}
                top={4}
                weight={'bold'}
                color={'#000'}
                size={12}>
                Kelvin R.C
              </TextAll>
            </Viewfooter>
            <Viewfooter top={3}>
              <TextAll top={4} weight={'bold'} color={'#000'} size={12}>
                Ranking:
              </TextAll>
              <Icon
                style={{marginTop: 5, marginLeft: 3}}
                name={'star'}
                size={20}
                color={'#FFD500'}
              />
              <Icon
                style={{marginTop: 5, marginLeft: 3}}
                name={'star'}
                size={20}
                color={'#FFD500'}
              />
              <Icon
                style={{marginTop: 5, marginLeft: 3}}
                name={'star'}
                size={20}
                color={'#FFD500'}
              />
              <Icon
                style={{marginTop: 5, marginLeft: 3}}
                name={'star'}
                size={20}
                color={'#FFD500'}
              />
              <Icon
                style={{marginTop: 5, marginLeft: 3}}
                name={'star'}
                size={20}
                color={'#FFD500'}
              />
              <Icon
                style={{marginTop: 5, marginLeft: 3}}
                name={'star'}
                size={20}
                color={'#808080'}
              />
            </Viewfooter>
          </ViewMarker>
        </Callout>
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
            initialRegion={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0168,
              longitudeDelta: 0.0168,
            }}
            style={{...StyleSheet.absoluteFillObject}}>
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
