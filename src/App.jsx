import React from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  _saveTodo(todo) {
    this.setState((prevState) => {
      return {todos: [...prevState.todos, todo]}
    });
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

