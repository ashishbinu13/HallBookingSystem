import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  saveBookings( bookingDetails:any)
  {
    return this.http.post<any>("http://localhost:3000/admin/insert",{bookingDetails})
    .subscribe((data)=>{console.log("succes")});

  }
}
