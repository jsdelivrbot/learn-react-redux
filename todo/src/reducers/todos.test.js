import todos from './todos'
import * as actions from '../actions'

//ADD
it('Todos are added with payload text and as incomplete', () => {
  var text = Math.random().toString(36);
  var initialState = [{ text: 'One', completed: false }];
  var expectedState = [ ...initialState, { text: text, completed: false}]
  testTodosReducer(initialState, expectedState, actions.ADD, text);
});

//TOGGLE
it('A incomplete todo in the list can be marked as complete', () => {
  var index = 1;
  var initialState = [
    { text: 'One', completed: false },
    { text: 'Two', completed: false },
    { text: 'Three', completed: false },
  ];
  var expectedState = [
    { text: 'One', completed: false },
    { text: 'Two', completed: true },
    { text: 'Three', completed: false },
  ];
  testTodosReducer(initialState, expectedState, actions.TOGGLE_COMPLETE, index);
});

it('A complete todo in the list can be marked as incomplete', () => {
  var index = 1;
  var initialState = [
    { text: 'One', completed: false },
    { text: 'Two', completed: true },
    { text: 'Three', completed: false },
  ];
  var expectedState = [
    { text: 'One', completed: false },
    { text: 'Two', completed: false },
    { text: 'Three', completed: false },
  ];
  testTodosReducer(initialState, expectedState, actions.TOGGLE_COMPLETE, index);
});

//CLEAR COMPLETED
it('Complete tasks can be removed from the list and with order preserved', () => {
  var mixedState = [
    { text: 'One', completed: false },
    { text: 'Two', completed: true },
    { text: 'Three', completed: true },
    { text: 'Four', completed: false },
    { text: 'Five', completed: true },
  ];
  var expectedState = [
    { text: 'One', completed: false },
    { text: 'Four', completed: false },
  ];
  testTodosReducer(mixedState, expectedState, actions.CLEAR_COMPLETED, undefined);
});

const testTodosReducer = (initialState=[], expectedState, type, payload) =>{
  var action = { type: type, payload: payload };
  var actual = todos(initialState, action);
  expect(actual).toEqual(expectedState);
}