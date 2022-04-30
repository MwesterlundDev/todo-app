import React from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

export type AppProps = {};
export type AppState = {
  todos: string[];
};

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  _saveTodo(todo: string) {
    this.setState((prevState) => ({todos: [...prevState.todos, todo]}));
  }

  render() {
    return (
      <div className="App">
        <TodoInput onSaveTodo={(todo) => this._saveTodo(todo)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
