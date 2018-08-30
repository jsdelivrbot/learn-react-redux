import React, { Component } from 'react';
import './App.css';

import TodoList from './containers/todo-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList />
      </div>
    );
  }
}
