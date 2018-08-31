export default function (state = {todos:[{id:"0", text:"Test"}]}, action){
  switch (action.type) {
    case 'ADD_TODO':
      var todos = state.todos.slice();
      todos.push({id:"0", text:action.payload})
      return {todos: todos}
  }
  return state;
}