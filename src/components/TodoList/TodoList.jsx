import React from "react";

export default class TodoInput extends React.Component {

  _getTodoItem(item, index) {
    return (<li key={index}>{item}</li>);
  }

  _getTodoItems() {
    return this.props.todos.map((todo, index) => this._getTodoItem(todo, index));
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this._getTodoItems()}
        </ul>
      </div>
    );
  }
}