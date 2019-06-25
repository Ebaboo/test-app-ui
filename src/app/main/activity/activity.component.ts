import { ActivityModel } from './activity.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainHttpService } from '../services/main-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit, OnDestroy {

  activities: ActivityModel[] = [];
  subscription: Subscription;
  progressCounter = 0;

  constructor(private httpService: MainHttpService) { }

  ngOnInit() {
    this.httpService.getActivity();
    this.subscription = this.httpService.activityChanged.subscribe(activity => {
      this.activities = [...activity];
      for (const activity of this.activities) {
        this.progressCounter++;
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
