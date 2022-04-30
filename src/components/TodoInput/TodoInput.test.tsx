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

    it('sets the state when the text input changes', () => {
      subject._textChange(event);
      expect(subject.setState).toHaveBeenCalledWith({todo: value});
    });
  });
});
