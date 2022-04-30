import React from 'react';
import TodoList, {TodoListProps} from './TodoList';

describe(TodoList.name, () => {
  const {prototype} = TodoList;
  let subject: TodoList;

  beforeEach(() => {
    subject = new TodoList({} as unknown as TodoListProps);
  });

  describe(prototype._getTodoItem.name, () => {
    let todo: string;
    let index: number;

    beforeEach(() => {
      todo = 'theTodo';
      index = 83;
    });

    it('returns a list item', () => {
      expect(subject._getTodoItem(todo, index)).toEqual((<li key={index}>{todo}</li>));
    });

    it('returns a list item when the index is 0', () => {
      expect(subject._getTodoItem(todo, 0)).toEqual((<li key={0}>{todo}</li>));
    });

    it('returns undefined if the todo is undefined/null', () => {
      expect(subject._getTodoItem(undefined as any, 0)).toBeUndefined();
      expect(subject._getTodoItem(null as any, 0)).toBeUndefined();
    });

    it('returns undefined if the index is undefined/null', () => {
      expect(subject._getTodoItem(todo, undefined as any)).toBeUndefined();
      expect(subject._getTodoItem(todo, null as any)).toBeUndefined();
    });
  });

  describe(prototype._getTodoItems.name, () => {
    let todo1: string;
    let todo2: string;
    let todo3: string;
    let todos: string[];

    beforeEach(() => {
      todo1 = 'Todo1';
      todo2 = 'Todo2';
      todo3 = 'Todo3';
      todos = [todo1, todo2, todo3];
      (subject as any).props = {todos};

      jest.spyOn(subject, '_getTodoItem').mockImplementation((todo, index) => todo);
    });

    it('gets todo items', () => {
      subject._getTodoItems();
      expect(subject._getTodoItem).toHaveBeenCalledTimes(3);
      expect(subject._getTodoItem).toHaveBeenCalledWith(todo1, 0);
      expect(subject._getTodoItem).toHaveBeenCalledWith(todo2, 1);
      expect(subject._getTodoItem).toHaveBeenCalledWith(todo3, 2);
    });

    it('returns the todos', () => {
      expect(subject._getTodoItems()).toContain(todo1);
      expect(subject._getTodoItems()).toContain(todo2);
      expect(subject._getTodoItems()).toContain(todo3);
    });
  });
});
