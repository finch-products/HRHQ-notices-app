import { Component } from '@angular/core';
import { Document, Branch, Notice } from '../model/dashboard.model';
import { DocumentService } from '../document.service';
import { mockBranches, notices } from '../mock-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  documents: Document[] = [
    /* ... */
  ];
  notices: Notice[] = notices;
  branches: Branch[] = mockBranches;
  pendingReport: { branchName: string; pendingCount: number }[] = [];
  branchesNotPosted: Branch[] = [];
  unacknowledgedNotices: { branch: Branch; notice: Notice }[] = [];

  confirmationReport: {
    branchName: string;
    totalNotices: number;
    confirmedNotices: number;
    pendingNotices: number;
  }[] = [];

  reportData: { date: string; branch: string; documentCount: number }[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.reportData = this.documentService.getDocumentsByDateAndBranch();
    this.generatePendingReport();
    this.generateConfirmationReport();
    this.findBranchesNotPosted();
    this.findUnacknowledgedNotices();
  }

  generatePendingReport(): void {
    console.log('generatePendingReport called');
    const pendingCountsByBranch: { [key: number]: number } = {};

    this.notices.forEach((notice) => {
      if (notice.status === 'pending') {
        pendingCountsByBranch[notice.branchId] =
          (pendingCountsByBranch[notice.branchId] || 0) + 1;
      }
    });

    console.log('pendingCountsByBranch:', pendingCountsByBranch);

    this.pendingReport = Object.keys(pendingCountsByBranch).map((branchId) => {
      const branch = this.branches.find((b) => b.id === Number(branchId));
      return {
        branchName: branch ? branch.name : 'Unknown',
        pendingCount: pendingCountsByBranch[Number(branchId)],
      };
    });
    console.log('pendingReport:', this.pendingReport);
  }

  generateConfirmationReport(): void {
    this.confirmationReport = this.branches.map((branch) => {
      const branchNotices = this.notices.filter(
        (notice) => notice.branchId === branch.id
      );
      const confirmedNotices = branchNotices.filter(
        (notice) => notice.status === 'confirmed'
      ).length;
      const pendingNotices = branchNotices.filter(
        (notice) => notice.status === 'pending'
      ).length;
      return {
        branchName: branch.name,
        totalNotices: branchNotices.length,
        confirmedNotices,
        pendingNotices,
      };
    });
  }

  findBranchesNotPosted(): void {
    const postedBranchIds = new Set(
      this.notices.map((notice) => notice.branchId)
    );
    this.branchesNotPosted = this.branches.filter(
      (branch) => !postedBranchIds.has(branch.id)
    );
  }

  findUnacknowledgedNotices(): void {
    this.unacknowledgedNotices = this.notices
      .filter((notice) => notice.seen && !notice.confirmed)
      .map((notice) => {
        const branch = this.branches.find(
          (branch) => branch.id === notice.branchId
        );
        return { branch, notice };
      })
      .filter((item) => item.branch !== undefined) as {
      branch: Branch;
      notice: Notice;
    }[];
  }
}
