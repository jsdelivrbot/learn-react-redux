import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.props.todos.map(todo => (
        <li key={todo.id} className="list-group-item" >{todo.text}</li>
        ))}
      </ul>
    );
  }
}

//Redux
function mapStateToProps(state){
  return{ todos: state.todos }
}
export default connect(mapStateToProps)(TodoList);