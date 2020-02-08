import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

/*
You may optionally specify the initial state as the second argument to createStore().
This is useful for hydrating the state of the client to match the state of a Redux application running on the server.
*/

// const store = createStore(todoApp, window.STATE_FROM_SERVER)
