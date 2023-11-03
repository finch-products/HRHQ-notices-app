import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { DocumentUploadComponent } from './admin/document-upload/document-upload.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationBellComponent } from './branch-admin/notification-bell/notification-bell.component';
import { NoticeDetailComponent } from './branch-admin/notice-detail/notice-detail.component';
import { BranchAdminComponent } from './branch-admin/branch-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentService } from './document.service';
import { EmailTemplateComponent } from './email-template/email-template.component';

@NgModule({
  declarations: [
    AuthComponent,
    AppComponent,
    AdminComponent,
    DocumentUploadComponent,
    UserManagementComponent,
    NotificationBellComponent,
    NoticeDetailComponent,
    BranchAdminComponent,
    DashboardComponent,
    EmailTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule ,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule
  ],
  providers: [AuthService, DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
