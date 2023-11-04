import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  title: string = '';
  authForm: FormGroup;
  otpSent = false;
  userType: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.authForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      otp: [{ value: '', disabled: true }, Validators.required],
    });
    this.route.paramMap.subscribe((params) => {
      this.userType = params.get('userType');
      this.title = this.userType === 'hrhqadmin' ? 'Login as HRHQ Admin' : 'Login as Branch Admin';
    });
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'custom-snackbar',
    });
  }
  sendOtp() {
    const phone = this.authForm.get('phone')!.value;
    this.authService.sendOtp(phone).then((success) => {
      if (success) {
        this.otpSent = true;
        this.openSnackBar('Successful', 'Close');
        this.authForm.get('otp')!.enable();
      }
    });
  }

  submit() {
    const otp = this.authForm.get('otp')!.value;
    this.authService.authenticate(otp).then((isAuthenticated) => {
      if (isAuthenticated) {
        this.openSnackBar('Successful', 'Close');
        if (this.userType === 'hrhqadmin') {
          localStorage.setItem('role', 'hrhqadmin');
        } else {
          localStorage.setItem('role', 'branchAdmin');
        }
        this.router.navigate(['/dashboard']);
      }
    });
  }

  showSubmitButton(): boolean {
    return this.otpSent && this.authForm.get('otp')!.value;
  }

}
