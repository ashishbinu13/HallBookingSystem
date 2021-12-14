import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUser(user:any){
   
    return this.http.post<any>('http://localhost:3000/auth/login', user);

  }
  
}
