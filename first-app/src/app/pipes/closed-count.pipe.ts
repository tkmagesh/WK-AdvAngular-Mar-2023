import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/bug';

@Pipe({
  name: 'closedCount',
  // pure : false
  pure : true

})
export class ClosedCountPipe implements PipeTransform {

  transform(bugs: Bug[], ...args: unknown[]): number {
    console.log('closedCount triggered')
    return bugs.reduce((closedCount, bug) => bug.isClosed ? closedCount + 1 : closedCount, 0)
  }

}
