import React from 'react';
import Emotion from './Emotion';
import ReactNativeWeb from './ReactNativeWeb';
import Styletron from './Styletron';
import StyletronClient from 'styletron-client';
import {StyletronProvider} from 'styletron-react';

const Index = props => (
  <div>
    <StyletronProvider styletron={new StyletronClient()}>
      <div>
        <Emotion />
        <Styletron />
        <ReactNativeWeb />
      </div>
    </StyletronProvider>
  </div>
);

export default Index;
