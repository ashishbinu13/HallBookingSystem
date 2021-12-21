import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private role!: string;

  constructor(private http: HttpClient, private _router: Router) {}

  loginUser(user: any) {
    return this.http
      .post<any>('http://localhost:3000/auth/login', user)
      .subscribe((res) => {
        user = this.getUser(res.accessToken);
        this.role = user.role;

        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);

        if (user.role === 'ADMIN') this._router.navigate(['/admin/home']);
      });
  }

  isLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  isAdmin() {
    if (this.role === 'ADMIN') return true;
    else return false;
    // return this.http.get('http://localhost:3000/auth/role');
  }

  getUser(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
