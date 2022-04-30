import React from 'react';
import {Button} from 'react-bootstrap';

export type TodoInputProps = {
  onSaveTodo: (todo: string) => any;
}

export type TodoInputState = {
  todoValue: string;
}

export default class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
  constructor(props: TodoInputProps) {
    super(props);

    this.state = {
      todoValue: '',
    };
  }

  _textChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({todoValue: e.target.value});
  }

  _isEnabled() {
    return this.state.todoValue !== '';
  }

  _saveTodo() {
    this.props.onSaveTodo(this.state.todoValue);
    this.setState({todoValue: ''});
  }

  render() {
    return (
      <div className="todo-input">
        <input value={this.state.todoValue} type="text" onChange={(e) => this._textChange(e)} />
        <Button
          type="button"
          variant="outline-primary"
          onClick={() => this._saveTodo()}
          disabled={!this._isEnabled()}
        >
          Save
        </Button>
      </div>
    );
  }
}
