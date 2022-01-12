import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  base_url: string = 'http://localhost:3000';

  // base_url: string = 'api';

  role!: string;

  constructor(private http: HttpClient, private _router: Router) {}

  loginUser(user: any) {
    return this.http.post<any>(`${this.base_url}/auth/login`, user);
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

  getUser() {
    var token = localStorage.getItem('accessToken') || '';
    var user = JSON.parse(atob(token.split('.')[1]));
    return user.aud;
  }
  addAssociate(user: any) {
    return this.http.post(`${this.base_url}/auth/register`, user);
  }

  getAssociate(id: any) {
    return this.http.get(`${this.base_url}/auth/getass/${id}`);
  }

  getass() {
    return this.http.get(`${this.base_url}/auth/getass`);
  }
  getass1(id: any) {
    return this.http.get(`${this.base_url}/auth/${id}`);
  }
  editass(user: any) {
    return this.http.put(`${this.base_url}/auth/editass`, user);
  }
  deleteass(id: any) {
    return this.http.delete(`${this.base_url}/auth/deleteass/${id}`);
  }
  getusers(user: any) {
    return this.http.get<any>('http://localhost:3000/auth/userlist/' + user);
  }
}
