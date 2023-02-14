import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {FinancesHomeComponent} from './finances/finances-home/finances-home.component';
import {ActivitiesHomeComponent} from './activities/activities-home/activities-home.component';
import {NotesHomeComponent} from "./notes/notes-home/notes-home.component";
import {TasksHomeComponent} from "./tasks/tasks-home/tasks-home.component";
import {ReportsHomeComponent} from "./reports/reports-home/reports-home.component";
import {AppContainerComponent} from "./app-container/app-container.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    redirectTo: 'logout'
  },
  {
    path: '',
    component: AppContainerComponent,
    data: {breadcrumb: 'Home'},
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {breadcrumb: 'Home'}
      },
      {
        path: 'notes',
        component: NotesHomeComponent,
        data: {breadcrumb: 'Notebooks'}
      },
      {
        path: 'finances',
        component: FinancesHomeComponent,
        data: {breadcrumb: 'Finances'}
      },
      {
        path: 'activities',
        component: ActivitiesHomeComponent,
        data: {breadcrumb: 'Activites'}
      },
      {
        path: 'tasks',
        component: TasksHomeComponent,
        data: {breadcrumb: 'Tasks'}
      },
      {
        path: 'reports',
        component: ReportsHomeComponent,
        data: {breadcrumb: 'Reports'}
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
