import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {


  base_url: string = 'http://localhost:3000';

  constructor(public http:HttpClient) { }

  saveBookings( bookingDetails:any)
  {
    console.log(bookingDetails)
    return this.http.post(`${this.base_url}/booking/insert`,bookingDetails)
    .subscribe((data)=>{console.log("succes")});

  }
  getBookingslist() {
    return this.http.get(`${this.base_url}/booking/getBookings`);
  }

  checkavailabilty(bookingDetails:any)
  {
    console.log(bookingDetails)
    return this.http.post("http://localhost:3000/booking/check", bookingDetails)
  }



  
}
