import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ChartComponent} from './shared/chart/chart.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {FinancesHomeComponent} from './finances/finances-home/finances-home.component';
import {ActivitiesHomeComponent} from './activities/activities-home/activities-home.component';
import {MatDividerModule} from "@angular/material/divider";
import {NotesHomeComponent} from './notes/notes-home/notes-home.component';
import {NotesService} from "./notes/notes.service";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import {BreadcrumbModule} from "xng-breadcrumb";
import {TasksHomeComponent} from './tasks/tasks-home/tasks-home.component';
import {ReportsHomeComponent} from './reports/reports-home/reports-home.component';
import {AboutAppDialogComponent} from './app-container/about-app-dialog/about-app-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AppContainerComponent} from './app-container/app-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChartComponent,
    FinancesHomeComponent,
    ActivitiesHomeComponent,
    NotesHomeComponent,
    TasksHomeComponent,
    ReportsHomeComponent,
    AboutAppDialogComponent,
    AppContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    HttpClientModule,
    HighchartsChartModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [AuthService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
