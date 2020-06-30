import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import manageUsers from './reducers/manageUsers'


// add imports and code


ReactDOM.render(<Provider = {store}>
  // add imports and code
  <App />
  // add imports and code
  ,
  document.getElementById('root')
);
