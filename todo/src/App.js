import React, { Component } from "react";
import { createStore } from "redux";
import * as actions from "./actions";
import todosReducer from "./reducers/todos"

import "./App.css";

const store = createStore(todosReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Application</h1>
        </header>
        {/* ADD TODO FORM */}
        <div>
          <button onClick={
            () => {actions.dispatchAddTodo(store,"test");}
          }>
          </button>
        </div>

      </div>
    );
  }
}

export default App;
