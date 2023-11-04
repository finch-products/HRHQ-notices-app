// user-management.component.ts
import { Component } from '@angular/core';
import { BranchManagementService } from '../branch-management.service';

@Component({
  selector: 'app-user-management',
  styleUrls: ['./user-management.component.scss'],
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent {
  branchName: string | undefined;
  // branches: string[] = [];

  constructor(private branchService: BranchManagementService) { }

  addBranch() {
    if (this.branchName) {
      this.branchService.addBranch(this.branchName);
      this.branchName = '';
    }
  }
  get branches() {
    return this.branchService.getBranches();
  }
}
