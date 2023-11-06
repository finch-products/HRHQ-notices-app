import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DocumentUploadComponent } from './admin/document-upload/document-upload.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { NoticeDetailComponent } from './branch-admin/notice-detail/notice-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { UserFormComponent } from './branch-admin/user-form/user-form.component';

const routes: Routes = [
  { path: 'admin/upload', component: DocumentUploadComponent },
  { path: 'branch-management', component: UserManagementComponent },
  { path: 'user-management', component: UserFormComponent  },
  { path: 'login/:userType', component: AuthComponent },
  { path: 'login', component: AuthComponent },
  { path: 'notice-detail', component: NoticeDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reminders', component: EmailTemplateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
