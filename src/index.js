import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './redux/reducers';
import App from './App';

import './index.css';
/*
You may optionally specify the initial state as the second argument to createStore().
This is useful for hydrating the state of the client to match the state of a Redux application running on the server.
*/

// const store = createStore(todoApp, window.STATE_FROM_SERVER)
const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
