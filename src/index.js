/**
 * ********************************************************
 *
 * @module  index.js
 * @author  astaiglesia
 * @date    2022
 * @description The React application's entry point to the DOM.
 * ReactDOM hangs our app on the #root 
 *
 * ********************************************************
 */
// ---libraries
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

// ---assets
import './assets/styles.css';
import store from './app/store';

// ---components
import App from './App';

// wrap main application with the redux store provider
render( 
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);