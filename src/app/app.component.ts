import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showHeader: boolean = true;
  title: string = '';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('role') === 'hrhqadmin') {
      this.title = 'HRHQ Admin';
    } else {
      this.title = 'Branch Admin';
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // hide header on login screen
        this.showHeader = !event.urlAfterRedirects.includes('login');
        console.log(event.urlAfterRedirects);
        console.log(this.showHeader);
      }
    });
  }

  logout() {
    if (localStorage.getItem('role') === 'hrhqadmin') {
      this.router.navigate(['/login/hrhqadmin']);
      localStorage.removeItem('role');
    } else {
      this.router.navigate(['/login']);
    }
  }
}
