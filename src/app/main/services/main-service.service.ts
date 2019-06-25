import { Injectable } from '@angular/core';
import { TaskModel } from '../tasks/tasks.model';
import { MessageModel } from '../messages/message.model';
import { ActivityModel } from '../activity/activity.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MainHttpService {

  tasks: TaskModel[] = [];
  tasksChanged = new Subject<TaskModel[]>();

  messages: MessageModel[] = [];
  messagesChanged = new Subject<MessageModel[]>();

  activity: ActivityModel[] = [];
  activityChanged = new Subject<ActivityModel[]>();

  getTasks() {
    this.http.get<TaskModel[]>(
      BACKEND_URL + 'tasks.json', {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'json'
      }
    )
      .subscribe(response => {
        this.tasks = response;
        this.tasksChanged.next([...this.tasks]);
      },
        error => {
          console.log(error);
        }
      );
  }

  getMessages() {
    this.http.get<MessageModel[]>(
      BACKEND_URL + 'messages.json', {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'json'
      }
    )
      .subscribe(response => {
        this.messages = response;
        this.messagesChanged.next([...this.messages]);
      },
        error => {
          console.log(error);
        }
      );
  }

  getActivity() {
    this.http.get<ActivityModel[]>(
      BACKEND_URL + 'activity.json', {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'json'
      }
    )
      .subscribe(response => {
        this.activity = response;
        this.activityChanged.next([...this.activity]);
      },
        error => {
          console.log(error);
        }
      );
  }

  constructor(private http: HttpClient) { }
}
