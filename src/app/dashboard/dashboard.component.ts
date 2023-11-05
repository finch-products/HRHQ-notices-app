import { Component } from '@angular/core';
import { Document, Branch, Notice } from '../model/dashboard.model';
import { mockBranches, notices, noticeCount } from '../mock-data';
import { EmailTemplateComponent } from '../email-template/email-template.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  documents: Document[] = [
    /* ... */
  ];
  notices: Notice[] = notices;
  branches: Branch[] = mockBranches;
  pendingReportData: { title: string; url: string }[] = [];
  branchesNotPosted: Branch[] = [];
  unacknowledgedNotices: { branch: Branch; notice: Notice }[] = [];
  noticeCount = noticeCount;

  confirmationReport: {
    branchName: string;
    totalNotices: number;
    seenNotAcknowledged: number;
    acknowledged: number;
    notSeen: number;
  }[] = [];

  reportData: { date: string; documents: string[] }[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.generateReport();
    this.generatePendingReport();
    this.generateConfirmationReport();
  }

  generateReport(): void {
    const grouped: { [key: string]: { date: string; documents: string[] } } =
      {};

    this.documents.forEach((doc) => {
      const key = doc.sentOn;
      grouped[key] = grouped[key] || { date: doc.sentOn, documents: [] };
    });

    this.reportData = Object.values(grouped);
  }

  generatePendingReport(): void {
    console.log('generatePendingReport called');

    this.notices.forEach((notice) => {
      if (notice.status === 'pending') {
        // Push the title and url of the notice
        this.pendingReportData.push({ title: notice.title, url: notice.url });
      }
    });
  }

  generateConfirmationReport(): void {
    this.confirmationReport = this.branches.map((branch) => {
      const branchNotices = this.notices.filter(
        (notice) => notice.branchId === branch.id
      );
      const seenNotAcknowledged = branchNotices.filter(
        (notice) =>
          notice.seen === true &&
          notice.confirmed === false &&
          notice.status === 'pending'
      ).length;
      const acknowledged = branchNotices.filter(
        (notice) =>
          notice.seen === true &&
          notice.confirmed === true &&
          notice.status === 'confirmed'
      ).length;
      const notSeen = branchNotices.filter(
        (notice) =>
          notice.seen === false &&
          notice.status === 'pending' &&
          notice.confirmed === false
      ).length;

      return {
        branchName: branch.name,
        totalNotices: branchNotices.length,
        seenNotAcknowledged,
        acknowledged,
        notSeen,
      };
    });
  }

  sendReminder() {
    this.dialog.open(EmailTemplateComponent, {
      width: '400px',
    });
  }
}
