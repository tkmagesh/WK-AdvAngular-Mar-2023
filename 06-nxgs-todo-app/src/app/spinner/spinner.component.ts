import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { SpinnerState } from '../spinner.state';
import { Observable } from 'rxjs';
import { Decrement, Increment } from '../spinner.actions';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  @Select(SpinnerState.value)
  spinnerValue: Observable<number>;

  constructor(private store : Store){

  }

  onBtnIncrementClick(){
    this.store.dispatch(new Increment())
  }

  onBtnDecrementClick(){
    this.store.dispatch(new Decrement())
  }
}
