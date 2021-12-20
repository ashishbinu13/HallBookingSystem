import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  base_url:string='http://localhost:3000';
  constructor(public http:HttpClient) { }

  addAssociate(addAssDetails: any){
    return this.http.post(`${this.base_url}/admin/insertass`,addAssDetails)
    .subscribe((data)=>{console.log("success")});
  }
  getAddList(){
    return this.http.get(`${this.base_url}/admin/getaddass`);
  }
}
