import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  @Input() title: string = 'Login';
  authForm: FormGroup;
  otpSent = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      otp: [{ value: '', disabled: true }, Validators.required],
    });
  }


  sendOtp() {
    const phone = this.authForm.get('phone')!.value;
    this.authService.sendOtp(phone).then((success) => {
      if (success) {
        this.otpSent = true;
        this.authForm.get('otp')!.enable();
      }
    });
  }

  submit() {
    const otp = this.authForm.get('otp')!.value;
    this.authService.authenticate(otp).then((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/admin/users']);
      }
    });
  }
}
