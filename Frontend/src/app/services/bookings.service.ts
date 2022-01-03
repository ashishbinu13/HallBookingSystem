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

  }
  getBooking(id:any){
    return this.http.get(`${this.base_url}/booking/`+id);
  }
  
  getBookingslist() {
    return this.http.get(`${this.base_url}/booking/getBookings`);
  }
 
  editBookings(bookings:any)
  {
    return this.http.put(`${this.base_url}/booking/editBookings`,bookings)
    .subscribe(data =>{console.log(data)})
    
  }
  checkavailabilty(bookingDetails:any)
  {
    console.log(bookingDetails)
    return this.http.post(`${this.base_url}/booking/check`, bookingDetails)
  }
  deleteBookings(id:any)
  {

    return this.http.delete(`${this.base_url}/booking/deleteBookings/`+id) 
    // .subscribe(data =>{console.log(data)}) 
  }
  getBookingslistbyid(user:any)
  {
    return this.http.get<any>(`${this.base_url}/booking/userbookinglist/`+user) 

  }


  
}
