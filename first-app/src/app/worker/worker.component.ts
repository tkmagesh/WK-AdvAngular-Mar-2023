import { Component } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent {
    workerStatus : string  = '';
    percentCompleted : number = 0;

    onBtnDoWorkClick(){
      const worker = new Worker(new URL('./my-worker.worker', import.meta.url))
      worker.postMessage({type : 'start'})
      this.workerStatus = "Started"
      worker.onmessage = ({data}) => {
        if (data.type === 'done'){
          this.workerStatus = 'completed'
        }
        if (data.type === 'progress') {
          this.percentCompleted = data.percentCompleted
        }
      }
    }
}


