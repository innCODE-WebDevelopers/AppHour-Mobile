import styled from 'styled-components/native';

export const Touch = styled.TouchableOpacity``;

export const Footer = styled.View`
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
`;

export const StepOne = styled.View`
  margin-top: 30%;
  display: ${props => (!props.register ? 'flex' : 'none')};
  flex: 1;
  align-items: center;
`;

export const StepTwo = styled.View`
  margin-top: 30%;
  display: ${props => (props.register ? 'flex' : 'none')};
  flex: 1;
  align-items: center;
`;
