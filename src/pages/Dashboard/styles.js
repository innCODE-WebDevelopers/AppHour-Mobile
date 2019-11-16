import styled from 'styled-components/native';
import {darken} from 'polished';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;
export const Linear = styled(LinearGradient).attrs(props => ({
  colors: [props.color, darken(0.1, props.color)],
}))`
  flex: 1;
`;
