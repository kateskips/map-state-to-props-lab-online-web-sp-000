import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import manageUsers from './reducers/manageUsers'

ReactDOM.render(<Provider store={store}>
  <App />
  // add imports and code
  ,
  document.getElementById('root')
);
