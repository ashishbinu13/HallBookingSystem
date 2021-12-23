import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
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
    return this.http.get('http://localhost:3000/auth/role');
  }
  addAssociate(user: any){
    console.log(user)
    return this.http.post('http://localhost:3000/auth/register',user)
    .subscribe((data)=>{console.log("success")});
  }
}
