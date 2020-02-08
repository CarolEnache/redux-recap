import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions';
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters;

/**
Note that todos also accepts state—but state is an array!
Now todoApp gives todos just a slice of the state to manage, and todos knows how to update just that slice.
This is called reducer composition, and it's the fundamental pattern of building Redux apps.
*/

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.todos.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
      });
    default:
      return state;
  }
}

function visibilityFilters(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilters,
  todos
});

export default todoApp;
