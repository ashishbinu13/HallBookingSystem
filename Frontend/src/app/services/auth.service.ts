import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role!: string;

  constructor(private http: HttpClient, private _router: Router) {}

  loginUser(user: any) {
    return this.http.post<any>('http://localhost:3000/auth/login', user);
  }

  isLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  isAdmin() {
    var token = localStorage.getItem('accessToken') || '';
    var user = JSON.parse(atob(token.split('.')[1]));

    return user.role === 'ADMIN' ? true : false;
  }

  getUser(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }
}