import Index from './components/Index';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('App', () => Index);

const render = () => {
  AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('js-root'),
  });
};

render();

if (module.hot) {
  module.hot.accept('./components/Index', () => {
    render(Index);
  });
}
