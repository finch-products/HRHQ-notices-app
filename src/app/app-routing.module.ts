import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DocumentUploadComponent } from './admin/document-upload/document-upload.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { NoticeDetailComponent } from './branch-admin/notice-detail/notice-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailTemplateComponent } from './email-template/email-template.component';

const routes: Routes = [
  { path: 'admin/upload', component: DocumentUploadComponent },
  { path: 'admin/users', component: UserManagementComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'notice-detail', component: NoticeDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reminders', component: EmailTemplateComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
