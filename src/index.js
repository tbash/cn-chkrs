import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import 'normalize.css/normalize.css';
import 'globalStyles';

const store = configureStore();

import App from './containers/App';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
