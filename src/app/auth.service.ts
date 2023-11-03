import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticate(otp: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
  sendOtp(phone: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`OTP sent to ${phone}`);
        resolve(true);
      }, 2000);
    });
  }
}