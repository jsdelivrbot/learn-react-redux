import { combineReducers } from 'redux'
import TodoListReducer from './todo-list-reducer'

const rootReducer = combineReducers({
  todos: TodoListReducer
});
export default rootReducer;