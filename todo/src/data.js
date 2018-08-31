
const ACTION_ADD_TODO = "ADD_TODO"
const ACTION_TOGGLE_TODO_COMPLETE = "TOGGLE_TODO_COMPLETE"
const ACTION_CLEAR_COMPLETED = "CLEAR_COMPLETED"

function createTodo(text){
  return {
    text: text,
    complete: false
  }
}

function createAddTodoAction(text){
  return {
    type: ACTION_ADD_TODO,
    payload: text
  }
}

function createToggleTodoCompleteAction(index){
  return {
    type: ACTION_TOGGLE_TODO_COMPLETE,
    payload: index
  }
}