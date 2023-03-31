import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Todo } from '../todo';
import { TodoState } from '../todo.state';
import { DeleteTodo, ToggleTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Select(TodoState.numUncheckedTodos)
  uncheckedTodos: Observable<number>;

  @Select(TodoState.todos)
  todos: Observable<Todo[]>;

  constructor(private store: Store) { }

  toggleTodo(todo: Todo) {
    this.store.dispatch(new ToggleTodo(todo));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(new DeleteTodo(todo));
  }

}