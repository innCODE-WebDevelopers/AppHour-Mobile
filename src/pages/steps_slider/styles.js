import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => (props ? props.color : '#000')};
`;

export const InternalView = styled.View`
  align-items: center;
  margin-top: 30%;
`;
