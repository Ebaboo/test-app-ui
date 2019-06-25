import { MessageModel } from './message.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainHttpService } from '../services/main-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  messages: MessageModel[] = [];
  subscription: Subscription;
  unreadedMessageCounter = 0;

  constructor(private httpService: MainHttpService) { }

  ngOnInit() {
    this.httpService.getMessages();
    this.subscription = this.httpService.messagesChanged.subscribe(messages => {
      this.messages = [...messages];
      const filtredMessages = [];
      for (const message of this.messages) {
        if (message) {
          if (message.status === 'unreaded') {
            filtredMessages.unshift(message);
            this.unreadedMessageCounter++;
          } else if (message.status === 'readed') {
            filtredMessages.push(message);
          }
        }
      }
      this.messages = [...filtredMessages];
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
