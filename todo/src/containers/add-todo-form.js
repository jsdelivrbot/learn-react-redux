import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/add-todo'

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearState(){this.setState({text:''})}
  handleChange(event){
    this.setState({text: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault()
    if (!this.state.text.trim()) { return; }
    this.props.addTodo({ text: this.state.text })
    this.setState({text:''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button type="submit"> Add Todo </button>
      </form>
    );
  }
}

//Redux
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addTodo: addTodo }, dispatch);
}
export default connect(mapDispatchToProps)(AddTodoForm);