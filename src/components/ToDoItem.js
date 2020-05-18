import React, {Component} from 'react';

class ToDoItem extends Component {
  render(){
    
    return(
      <li>
        <input type="checkbox" onChange={this.props.toggleCheckBox}/>
        <span>{this.props.text}</span>
        <span onClock={this.props.deleteTodo}>[✖︎]</span>
      </li>
    );
  }
}

export default ToDoItem;