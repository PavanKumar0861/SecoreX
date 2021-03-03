import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { HeadNavbarComponent } from './components/head-navbar/head-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { LoginComponent } from './components/login/login.component';

import { SettingsService } from './services/settings.service';
import { RootComponent } from './components/root/root.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IdCardApprovalComponent } from './components/id-card-approval/id-card-approval.component';
import { DispatchComponent } from './components/dispatch/dispatch.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { IdCardIssueComponent } from './components/id-card-issue/id-card-issue.component';
import { IdCardIssueDetailComponent } from './modals/id-card-issue-detail/id-card-issue-detail.component';
import { PrintPipelineComponent } from './components/printing-queue/print-pipeline/print-pipeline.component';
import { PrintStatusComponent } from './components/printing-queue/print-status/print-status.component';
import { CompletedQueueComponent } from './components/printing-queue/completed-queue/completed-queue.component';
import { PrinterTemplateComponent } from './modals/printer-template/printer-template.component';
import { DispatchedCardsDetailsComponent } from './modals/dispatched-cards-details/dispatched-cards-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RejectReasonComponent } from './modals/reject-reason/reject-reason.component';
import { IdCardApproveComponent } from './modals/id-card-approve/id-card-approve.component';
import { EmployeePhotoComponent } from './modals/employee-photo/employee-photo.component';
import { EmployeeDetailsComponent } from './modals/employee-details/employee-details.component';
import { CardPreviewComponent } from './modals/card-preview/card-preview.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideNavbarComponent,
    HeadNavbarComponent,
    LineChartComponent,
    BarChartComponent,
    LoginComponent,
    RootComponent,
    NavBarComponent,
    IdCardApprovalComponent,
    DispatchComponent,
    DashboardComponent,
    InboxComponent,
    IdCardIssueComponent,
    IdCardIssueDetailComponent,
    PrintPipelineComponent,
    PrintStatusComponent,
    CompletedQueueComponent,
    PrinterTemplateComponent,
    DispatchedCardsDetailsComponent,
    RejectReasonComponent,
    IdCardApproveComponent,
    EmployeePhotoComponent,
    EmployeeDetailsComponent,
    CardPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,ChartsModule,
    FlexLayoutModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
