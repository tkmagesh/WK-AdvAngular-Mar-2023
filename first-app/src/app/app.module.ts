import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClosedCountPipe } from './pipes/closed-count.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { BugStatsComponent } from './components/bug-stats/bug-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateService } from './services/date.service';
import { EnhancedDateService } from './services/enhancedDate.service';

const dummyDateService = {
  getCurrentTime(){
    return new Date(2000,3,10)
  }
}

function createNewDateService() {
  return {
    getCurrentTime(){
      return new Date(2010,4,10)
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ClosedCountPipe,
    ElapsedPipe,
    BugStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // DateService
    // { provide : DateService, useClass : DateService }
    // {provide : DateService, useClass : EnhancedDateService}
    // { provide : DateService, useValue : dummyDateService}
    // {provide : DateService, useFactory : createNewDateService},
    // {provide : ?, useValue : "Bug Tracker Application"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
