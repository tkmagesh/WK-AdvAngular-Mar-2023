import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Bug } from './models/bug'
import { HttpClient } from '@angular/common/http'
import { concatMap, debounceTime, distinctUntilChanged, from, fromEvent, map, mergeMap, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { DateService } from './services/date.service';
import { APP_NAME_TOKEN } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  private serviceEndPoint = 'http://localhost:3000/bugs'

  // bugs: Bug[] = []
  bugs$! : Observable<Bug[]>

  newBugName: string = ''
  @ViewChild('btnSearch', { static : true}) btnSearch! : ElementRef;

  @ViewChild('txtSearch', { static: true }) txtSearch! : ElementRef;

  currentTime !: Date;

  constructor(
    private httpClient : HttpClient, 
    private dateService : DateService,
    @Inject(APP_NAME_TOKEN)public appName : string
    ){
    
  }
  ngAfterViewInit(): void {
     this.bugs$ = fromEvent(this.txtSearch.nativeElement, 'keyup')
        .pipe(
          tap(() => console.log('search term entered')),
          startWith(''),
          debounceTime(400),
          map(() => this.txtSearch.nativeElement.value),
          distinctUntilChanged(),
          switchMap((searchText) => this.getBugs(searchText))
        )
  }
  ngOnInit(): void {
    // this.bugs$ = this.getBugs('')
    // const dateService = new DateService()
    this.currentTime = this.dateService.getCurrentTime()
  }

  getBugs(searchText : string) : Observable<Bug[]>{
    return this.httpClient
      .get<Bug[]>(`${this.serviceEndPoint}?q=${searchText}`)
  }
  

  onBtnAddNewClick(){
    /* const newBug = {
      id : this.bugs.reduce((prevResult, bug) => prevResult > bug.id ? prevResult : bug.id, 0) + 1,
      name : this.newBugName,
      isClosed : false,
      createdAt : new Date()
    }
    // this.bugs.push(newBug)
    // converting the above to immutable to take advantage of OnPush ChangeDetection strategy
    this.bugs = [...this.bugs, newBug] */
  }

  onBtnRemoveClick(bugToRemove : Bug){
    // this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
    // this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
  }

  onBugNameClick(bugToToggle : Bug){
    // bugToToggle.isClosed = !bugToToggle.isClosed
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
    // this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug )
  }
  onBtnRemoveClosedClick(){
    // this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }

  
}
