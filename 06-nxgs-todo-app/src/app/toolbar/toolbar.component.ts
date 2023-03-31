import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleAllTodos } from '../todo.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private store: Store) { }

  checkAll() {
    this.store.dispatch(new ToggleAllTodos());
  }

  deleteChecked() {
    // TODO: implement
  }

  filterTodos(event) {
    // TODO: implement
    const filter: string = event.target.value;
  }

}