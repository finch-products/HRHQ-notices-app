import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BranchManagementService } from 'src/app/admin/branch-management.service';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  branch: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  userForm: FormGroup;
  branches = this.branchService.getBranches();

  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '123 Main St',
      branch: 'Bellandur'
    },
    {
      firstName: 'Shyam',
      lastName: 'Roy',
      email: 'shyam.roy@example.com',
      phone: '1234567890',
      address: '123 Main St',
      branch: 'Marathali'
    },
    {
      firstName: 'Shewtha',
      lastName: 'Rao',
      email: 'shewtha.rao@example.com',
      phone: '1234567890',
      address: '123 Main St',
      branch: 'Bellandur'
    },
  ];
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,private branchService: BranchManagementService) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'custom-snackbar',
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);
      this.openSnackBar('Form Submitted!', 'Close');
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }
}
