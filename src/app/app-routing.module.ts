import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

import { IdCardApprovalComponent } from './components/id-card-approval/id-card-approval.component';
import { LoginComponent } from './components/login/login.component';
import { DispatchComponent } from './components/dispatch/dispatch.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { IdCardIssueComponent } from './components/id-card-issue/id-card-issue.component';
import { CompletedQueueComponent } from './components/printing-queue/completed-queue/completed-queue.component';
import { PrintPipelineComponent } from './components/printing-queue/print-pipeline/print-pipeline.component';
import { PrintStatusComponent } from './components/printing-queue/print-status/print-status.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      { path: "dashboard", component: DashboardComponent},
      { path: "id-card-approval", component: IdCardApprovalComponent},
      { path: "inbox", component: InboxComponent },
      { path: "card-issue", component: IdCardIssueComponent },
      { path: "dispatch", component: DispatchComponent },
      { path: "print-status", component: PrintStatusComponent },
      { path: "print-pipeline", component: PrintPipelineComponent },
      { path: "completed-queue", component: CompletedQueueComponent },
    ]
  },

  { path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
