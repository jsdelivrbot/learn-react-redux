export default function (state = [], action){
  switch (action.type) {
    case 'ADD_TODO':
      var todos = state.todos.slice();
      todos.push({id:"0", text:action.payload})
      return todos
  }
  return state;
}


// return [
//   {id:"1", text:"One"},
//   {id:"2", text:"Two"}
// ]