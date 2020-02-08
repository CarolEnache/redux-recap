import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  console.log('TCL: getVisibleTodos -> todos', todos);
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};
const mapStateToProps = state => {
  console.log(state);
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilters)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
