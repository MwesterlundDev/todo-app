import App, {AppProps} from './App';

describe(App.name, () => {
  const {prototype} = App;
  let subject: App;

  beforeEach(() => {
    subject = new App({} as unknown as AppProps);
  });

  describe(prototype._saveTodo.name, () => {
    let todo: string;
    beforeEach(() => {
      todo = 'myTest';
      (subject as any).state.todos = ['test1'];

      jest.spyOn(subject, 'setState').mockImplementation();
    });

    it('adds a todo to the lits', () => {
      subject._saveTodo(todo);
      expect(subject.setState).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
