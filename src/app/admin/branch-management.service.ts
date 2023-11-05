import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BranchManagementService {
  private branches = ['Branch 1', 'Branch 2', 'Branch 3', 'Branch 4'];

  getBranches() {
    return this.branches;
  }

  addBranch(branch: string) {
    this.branches.push(branch);
  }
}
