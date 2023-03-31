import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Decrement, Increment } from './spinner.actions';

@State<number>({
  name: 'counter',
  defaults: 0
})
@Injectable()
export class SpinnerState {

  @Selector()
  static value(state: number): number {
    return state;
  }

  @Action(Increment)
  increment(ctx : StateContext<number>, action : Increment){
    setTimeout(() => {
        ctx.setState(ctx.getState() + 1)    
    }, 5000);
    
  }

    @Action(Decrement)
    decrement(ctx: StateContext<number>, action: Decrement) {
        ctx.setState(ctx.getState() - 1)
  }
}