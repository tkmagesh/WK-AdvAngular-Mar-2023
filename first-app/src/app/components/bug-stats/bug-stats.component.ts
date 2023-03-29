import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Bug } from 'src/app/models/bug';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-bug-stats',
  templateUrl: './bug-stats.component.html',
  styleUrls: ['./bug-stats.component.css'],
  providers : [
    {provide : DateService , useClass : DateService}
  ]
})
export class BugStatsComponent {
  @Input('data')
  bugs : Bug[] = []

  constructor(private dateService : DateService) {

  }
  getCurrentTime(){
    return this.dateService.getCurrentTime()
  }
}
