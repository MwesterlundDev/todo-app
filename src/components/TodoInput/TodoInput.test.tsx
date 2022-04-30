import React from 'react';
import TodoInput, {TodoInputProps} from './TodoInput';

describe(TodoInput.name, () => {
  const {prototype} = TodoInput;
  let subject: TodoInput;

  beforeEach(() => {
    subject = new TodoInput({} as TodoInputProps);
  });

  describe(prototype._textChange.name, () => {
    let event: React.ChangeEvent<HTMLInputElement>;
    let value: string;
    beforeEach(() => {
      value = 'theValue';
      event = {target: {value}} as unknown as React.ChangeEvent<HTMLInputElement>;

      jest.spyOn(subject, 'setState').mockImplementation();
    });

    it('sets the state when the text input changes (FAILS ON PURPOSE)', () => {
      subject._textChange(event);
      expect(subject.setState).toHaveBeenCalledWith({todo: value});
    });

    it('sets the state when the text input changes', () => {
      subject._textChange(event);
      expect(subject.setState).toHaveBeenCalledWith({todoValue: value});
    });
  });

  describe(prototype._isEnabled.name, () => {
    beforeEach(() => {
      (subject as any).state.todoValue = 'Some Value';
    });

    it('returns true when the input has a value', () => {
      expect(subject._isEnabled()).toEqual(true);
      expect(subject._isEnabled()).toBeTruthy();
    });

    it('returns false when the input dose not have a value', () => {
      (subject as any).state.todoValue = '';
      expect(subject._isEnabled()).toEqual(false);
      expect(subject._isEnabled()).not.toBeTruthy();
    });
  });

  describe(prototype._saveTodo.name, () => {
    beforeEach(() => {
      (subject as any).state.todoValue = 'Some Value';

      jest.spyOn(subject, 'setState').mockImplementation();
      (subject as any).props.onSaveTodo = jest.fn();
      jest.spyOn(subject, '_isEnabled').mockReturnValue(true);
    });

    it('calls save todo', () => {
      subject._saveTodo();
      expect(subject.props.onSaveTodo).toHaveBeenCalledWith('Some Value');
    });

    it('resets the state to empty', () => {
      subject._saveTodo();
      expect(subject.setState).toHaveBeenCalledWith({todoValue: ''});
    });

    it('does not call the functions when there is no input value', () => {
      jest.spyOn(subject, '_isEnabled').mockReturnValue(false);
      subject._saveTodo();
      expect(subject.setState).not.toHaveBeenCalled();
      expect(subject.props.onSaveTodo).not.toHaveBeenCalled();
    });
  });
});
