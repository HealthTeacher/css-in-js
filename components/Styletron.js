import React from 'react';
import { styled } from 'styletron-react';

const Container = styled('div', {
  background: '#ccc',
  padding: '1rem',
});

const Heading = styled('h1', {
  color: 'white',
  margin: 0,
});

const Body = styled('p', {
  color: 'red',
});

const Styletron = props => (
  <Container>
    <Heading>Hello, World!</Heading>
    <Body>I am Body.</Body>
  </Container>
);

export default Styletron;
