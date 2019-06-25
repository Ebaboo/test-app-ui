import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'workflow', component: AppComponent},
  {path: 'statistic', component: AppComponent},
  {path: 'calendar', component: AppComponent},
  {path: 'users', component: AppComponent},
  {path: 'settings', component: AppComponent},
  {path: '', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
