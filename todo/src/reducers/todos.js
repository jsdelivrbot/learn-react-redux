import todo from "./todo";
import * as a from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case a.ADD_TODO:
      return a.pureAppend(state, todo(undefined, action));

    case a.TOGGLE_TODO_COMPLETE:
      var index = action.payload;
      return a.pureReplace(state, todo(state[index], action), index);

    case a.CLEAR_COMPLETED_TODOS:
      return state.filter(todo => {
        return todo.completed == false;
      });

    default:
      return [];
  }
}