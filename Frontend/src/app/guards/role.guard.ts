import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  isAdmin!: boolean;

  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate() {
    if (this._auth.isAdmin()) return true;
    this._router.navigate(['']);
    return false;
  }
}
