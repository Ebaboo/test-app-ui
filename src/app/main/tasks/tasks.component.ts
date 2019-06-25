import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainHttpService } from '../services/main-service.service';
import { TaskModel } from './tasks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: TaskModel[] = [];
  subscription: Subscription;
  delayCounter = 0;
  progressCounter = 0;

  constructor(private httpService: MainHttpService) { }

  ngOnInit() {
    this.httpService.getTasks();
    this.subscription = this.httpService.tasksChanged.subscribe(tasks => {
      this.tasks = [...tasks];
      for (const task of this.tasks) {
        if (task) {
          if (task.status === 'delay') {
            this.delayCounter++;
          }
          if (task.status === 'progress') {
            this.progressCounter++;
          }
        }
      }
    }, error => {
      console.log(error);
    });



  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
