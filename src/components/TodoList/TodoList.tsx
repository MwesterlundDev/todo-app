import React from 'react';

export type TodoListProps = {
  todos: string[];
}

export type TodoListState = {}

export default class TodoList extends React.Component<TodoListProps, TodoListState> {
  _getTodoItem(item: string, index: number) {
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
