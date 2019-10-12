import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/store';

const rootElement = document.getElementById('section-lead-dashboard');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
