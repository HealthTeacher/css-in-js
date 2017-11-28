import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('js-root')
  );
};

render(Index);

if (module.hot) {
  module.hot.accept('./components/Index', () => {
    render(Index);
  });
}
