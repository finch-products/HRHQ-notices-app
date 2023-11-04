import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  userForm: FormGroup;

  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      contact: '1234567890',
      address: '123 Main St',
    },
    {
      firstName: 'Shyam',
      lastName: 'Roy',
      email: 'shyam.roy@example.com',
      contact: '1234567890',
      address: '123 Main St',
    },
    {
      firstName: 'Shewtha',
      lastName: 'Rao',
      email: 'shewtha.rao@example.com',
      contact: '1234567890',
      address: '123 Main St',
    },
  ];
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      address: ['', Validators.required],
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
