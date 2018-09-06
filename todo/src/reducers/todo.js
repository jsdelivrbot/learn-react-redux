import * as a from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case a.ADD_TODO:
      return { text: action.payload, completed: false };

    case a.TOGGLE_TODO_COMPLETE:
      return { ...state, completed: !state.completed };

    default:
      return { text: "", completed: false };
  }
}
