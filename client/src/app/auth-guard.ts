import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DhAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
