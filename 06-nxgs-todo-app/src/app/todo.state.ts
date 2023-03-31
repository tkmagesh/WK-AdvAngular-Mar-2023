import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todo } from './todo';
import { CreateTodo, DeleteTodo, ToggleTodo, ToggleAllTodos } from './todo.actions';

interface TodoStateModel {
  todos: Todo[]
}

const sampleTodos: Todo[] = [
  { description: 'Implement deleting a todo', done: true },
  { description: 'Implement completing a todo', done: true },
  { description: 'Implement deleting all todos', done: false },
  { description: 'Implement completing all todos', done: false },
  { description: 'Implement filtering the todo list', done: false },
];

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: sampleTodos
  }
})
@Injectable()
export class TodoState {

  @Selector()
  static todos(state: TodoStateModel): Todo[] {
    return state.todos;
  }

  @Selector()
  static numUncheckedTodos(state: TodoStateModel): number {
    return state.todos.filter(todo => !todo.done).length;
  }

  @Action(CreateTodo)
  createTodo(ctx: StateContext<TodoStateModel>, action: CreateTodo) {
    const todo = { description: action.payload, done: false };
    ctx.patchState({
      todos: [...ctx.getState().todos, todo]
    });
  }

  @Action(DeleteTodo)
  deleteTodo(ctx: StateContext<TodoStateModel>, action: DeleteTodo) {
    const { todos } = ctx.getState();
    ctx.patchState({
      todos: todos.filter(todo => todo !== action.payload)
    });
  }

  @Action(ToggleTodo)
  toggleTodo(ctx: StateContext<TodoStateModel>, action: ToggleTodo) {
    const todo = action.payload;
    todo.done = !todo.done;
    ctx.patchState({
      todos: [...ctx.getState().todos]
    })
  }

  @Action(ToggleAllTodos)
  toggleAllTodos(ctx: StateContext<TodoStateModel>, action: ToggleTodo) {
    const { todos } = ctx.getState();
    const allDone = todos.every(todo => todo.done);
    todos.forEach(todo => todo.done = !allDone);
    ctx.patchState({
      todos: [...todos]
    })
  }
}