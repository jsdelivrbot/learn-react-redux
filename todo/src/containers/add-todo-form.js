

import { bindActionCreators } from 'redux';

class AddTodoForm extends Component {
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