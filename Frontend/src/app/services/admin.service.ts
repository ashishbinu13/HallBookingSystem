import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  saveBookings( bookingDetails:any)
  {
    console.log(bookingDetails)
    return this.http.post("http://localhost:3000/admin/insert",bookingDetails)
    .subscribe((data)=>{console.log("succes")});

  }

  checkavailabilty(bookingDetails:any)
  {
    console.log(bookingDetails)
    return this.http.get("http://localhost:3000/admin/check", {params:bookingDetails})
  }

}
