import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html'
})
export class EmailTemplateComponent {
  subject: string = 'Reminder: New Notices';
  body: string = 'Dear Branch Admin,\n\nNew notices have been sent to your branch. Please review and acknowledge.\n\nThank you,\nHRHQ';


  subject1: string = 'Confirmation Received: Posted Notices';
  body1: string = 'Dear HRHQ,\n\nBranch [Branch Name] has posted the notices and sent the confirmation pictures. Please review the attachments.\n\nThank you,\n[Branch Admin Name]\n[Branch Name]';


  subject2: string = 'Daily Reminder: Notices Pending';
  body2: string = 'Dear [Branch Admin Name],\n\nThis is a reminder that there are [number] notices pending for your branch. Please take action accordingly.\n\nThank you,\nHRHQ';
}
