import React, {ReactNode} from 'react';

export type TodoListProps = {
  todos: string[];
}

export type TodoListState = {}

export default class TodoList extends React.Component<TodoListProps, TodoListState> {
  _getTodoItem(todo: string, index: number): ReactNode | undefined {
    let listItem;
    if (todo && (index || index === 0)) {
      listItem = (<li key={index}>{todo}</li>);
    }
    return listItem;
  }

  _getTodoItems(): ReactNode[] {
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
