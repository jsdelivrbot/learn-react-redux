import React, { Component } from 'react';
import './App.css';

import TodoList from './containers/todo-list';
import AddTodoForm from './containers/add-todo-form'

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList />
        <h3>Add</h3>
        <AddTodoForm />
      </div>
    );
  }
}
