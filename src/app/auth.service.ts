import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private roleSubject = new BehaviorSubject<string | null>(localStorage.getItem('role'));
  role$ = this.roleSubject.asObservable();

  private titleSubject = new BehaviorSubject<string>('');
  title$ = this.titleSubject.asObservable();


  constructor() {
    this.role$.subscribe(role => {
      if (role === 'hrhqadmin') {
        this.titleSubject.next('HRHQ Admin');
      } else {
        this.titleSubject.next('Branch Admin');
      }
    });
  }

  getTitle(): Observable<string> {
    return this.titleSubject.asObservable();
  }
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

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  setRole(role: string): void {
    localStorage.setItem('role', role);
    this.roleSubject.next(role);
  }

  // setRole(role: string): void {
  //   this.role = role;
  // }

  // getRole(): string {
  //   return this.role;
  // }
}
