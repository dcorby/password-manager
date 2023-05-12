import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private router: Router
  ) {}

  private token = 'foo';
  isLoggedIn = false;

  // Store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(username: string, password: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        localStorage.setItem('token', this.token);
        this.isLoggedIn = true;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
}
