import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './elements/templates';
import './base.css'

const initialState = {}

console.log(`index`, App)
const store = createStore(App.reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App.components />
  </Provider>,
  document.getElementById('root')
);
