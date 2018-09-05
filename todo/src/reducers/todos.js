import todo from './todo'
import * as actions from '../actions'

export default function(state = [], action){
  switch(action.type){
    case actions.ADD:
      return pureAppend(state, todo(undefined, action));

    case actions.TOGGLE_COMPLETE:
      var index = action.payload;
      return pureReplace(state, todo(state[index], action), index);

    case actions.CLEAR_COMPLETED:
      return state.filter(todo => { return todo.completed == false; });

    default:
      return [];
  }
}

const pureReplace = (xs, x, index) => {
  return [...xs.slice(0, index), x, ...xs.slice(index + 1) ];
}
const pureAppend = (xs, x) => {
  return [ ...xs, x]
}