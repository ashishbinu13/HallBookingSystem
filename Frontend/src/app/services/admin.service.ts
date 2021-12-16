import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  addAssociate(addAssDetails: any){
    return this.http.post("http://localhost:3000/admin/insertass",addAssDetails)
    .subscribe((data)=>{console.log("success")});
  }
}
