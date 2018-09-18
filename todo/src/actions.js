export const ADD_TODO = "ADD";
export const TOGGLE_TODO_COMPLETE = "TOGGLE_COMPLETE";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED";

//===========================================================
// DISPACHERS
//===========================================================
export function dispatchAddTodo(store, text) {
  store.dispatch(createAddTodo(text));
};

export function dispatchClearCompletedTodos(store) {
  store.dispatch(createClearCompletedTodos());
};

export function dispatchToggleTodoComplete(store, index) {
  store.dispatch(createToggleTodoComplete(index));
};
//===========================================================
// ACTION CSTR
//===========================================================
function createAddTodo(text) {
  return { type: ADD_TODO, payload: text };
};

function createClearCompletedTodos() {
  return { type: CLEAR_COMPLETED_TODOS, payload: "" };
};

function createToggleTodoComplete(index) {
  return { type: TOGGLE_TODO_COMPLETE, payload: index }; 
};

//===========================================================
// HELPERS
//===========================================================
export function pureReplace(xs, x, index) {
  return [...xs.slice(0, index), x, ...xs.slice(index + 1)];
};
export function pureAppend(xs, x) {
  return [...xs, x];
};
