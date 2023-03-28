import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClosedCountPipe } from './pipes/closed-count.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { BugStatsComponent } from './components/bug-stats/bug-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    ClosedCountPipe,
    ElapsedPipe,
    BugStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
