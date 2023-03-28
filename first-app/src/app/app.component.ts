import { Component } from '@angular/core';
import { Bug } from './models/bug'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 
    Use Cases:
      1. Adding bugs
      2. Listing bugs
      3. Removing bugs
      4. Toggling bugs
      5. Remove closed bugs
      6. Display Stats
  */
  bugs : Bug[] = []
  newBugName : string = ''

  onBtnAddNewClick(){
    const newBug = {
      id : this.bugs.reduce((prevResult, bug) => prevResult > bug.id ? prevResult : bug.id, 0) + 1,
      name : this.newBugName,
      isClosed : false,
      createdAt : new Date()
    }
    // this.bugs.push(newBug)
    // converting the above to immutable to take advantage of OnPush ChangeDetection strategy
    this.bugs = [...this.bugs, newBug]
  }

  onBtnRemoveClick(bugToRemove : Bug){
    // this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
  }

  onBugNameClick(bugToToggle : Bug){
    // bugToToggle.isClosed = !bugToToggle.isClosed
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
    this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug )
  }
  onBtnRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }

  getClosedCount() : number {
    console.log('getClosedCount triggered')
    return this.bugs.reduce((closedCount, bug) => bug.isClosed ? closedCount + 1 : closedCount, 0)
  }
}
