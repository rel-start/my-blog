import './assets/scripts/polyfill.js';
import 'core-js/es';
import 'mutation-observer';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

import '@assets/stylesheets/rest.css';
import '@assets/stylesheets/index.css';
import store from '@reducers/store.js';
import routes from './routes/index';


ReactDOM.render(
  <HashRouter basename="/my-blog">
    <Provider store={store}>
      {routes()}
    </Provider>
  </HashRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
