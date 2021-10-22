import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean | UrlTree {
    //  Not sure how to check if token is expired, so ignoring that piece
    if (this.authService.hasToken) {
      return true;
    }

    return this.router.createUrlTree(['login']);
  }
}
