import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class AppComponent implements OnInit {
  opened = true;
  mode = 'side';
  hasBackdrop = false;
  initWidth = window.innerWidth;

  onResize(event) {
    if (event.target.innerWidth < 960) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  ngOnInit() {
    if (this.initWidth < 960) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  constructor() {

  }


}
