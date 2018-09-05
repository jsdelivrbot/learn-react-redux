import * as actions from '../actions'

export default function(state = {}, action){
  switch(action.type){
    case actions.ADD:
      return { text: action.payload, completed: false }

    case actions.TOGGLE_COMPLETE:
      return {...state, completed: !state.completed };

    default:
      return {text:'', completed: false};
  }
}