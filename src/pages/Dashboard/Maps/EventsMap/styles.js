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
  flex: 1;
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
