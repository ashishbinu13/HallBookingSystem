import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddingService {

  base_url:string='http://localhost:3000';
  constructor(public http:HttpClient) { }

  addAssociate(addAssDetails: any){
    console.log(addAssDetails)
    return this.http.post(`${this.base_url}/adding/insertass`,addAssDetails)
    .subscribe((data)=>{console.log("success")});
  }
  getAddList(){
    return this.http.get(`${this.base_url}/adding/getaddass`);
  }
}
