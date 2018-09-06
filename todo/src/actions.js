export const ADD_TODO = "ADD";
export const TOGGLE_TODO_COMPLETE = "TOGGLE_COMPLETE";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED";

//===========================================================
// DISPACHERS
//===========================================================
export const dispatchAddTodo = function(store, text) {
  store.dispatch(createAddTodo(text));
};

export const dispatchClearCompletedTodos = function(store) {
  store.dispatch(createClearCompletedTodos());
};

export const dispatchToggleTodoComplete = function(store, index) {
  store.dispatch(createToggleTodoComplete(index));
};
//===========================================================
// ACTION CSTR
//===========================================================
const createAddTodo = function(text) {
  return { type: ADD_TODO, payload: text };
};

const createClearCompletedTodos = function() {
  return { type: CLEAR_COMPLETED_TODOS, payload: "" };
};

const createToggleTodoComplete = function(index) {
  return { type: TOGGLE_TODO_COMPLETE, payload: index };
};

//===========================================================
// HELPERS
//===========================================================
export const pureReplace = (xs, x, index) => {
  return [...xs.slice(0, index), x, ...xs.slice(index + 1)];
};
export const pureAppend = (xs, x) => {
  return [...xs, x];
};
