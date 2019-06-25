import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TopTabComponent } from './top-tab/top-tab.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DropdownDirective } from './shared/dropdown.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { LeftChartComponent } from './main/left-chart/left-chart.component';
import { RightChartComponent } from './main/right-chart/right-chart.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { TasksComponent } from './main/tasks/tasks.component';
import { MessagesComponent } from './main/messages/messages.component';
import { DaysLeftPipe } from './pipes/days-left.pipe';
import { ActivityComponent } from './main/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    TopTabComponent,
    DropdownDirective,
    MainComponent,
    LeftChartComponent,
    RightChartComponent,
    DateAgoPipe,
    TasksComponent,
    MessagesComponent,
    DaysLeftPipe,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
