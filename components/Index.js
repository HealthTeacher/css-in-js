import React from 'react';
import styled, { css, injectGlobal } from 'react-emotion';

injectGlobal`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`

const Container = styled('div')`
  background: #ccc;
  padding: 1rem;
`

const myStyle = css`
  color: white;
  margin: 0;
`

const Body = styled('p')({
  color: 'red',
})

export default props => (
  <Container>
    <h1 className={myStyle}>Hello, World!</h1>
    <Body>I am Body.</Body>
  </Container>
)
