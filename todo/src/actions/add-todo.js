export function addTodo(add){
  return {
    type: 'ADD_TODO',
    payload: add.text
  }
}