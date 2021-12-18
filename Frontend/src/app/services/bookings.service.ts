import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient) { }

  getBooking(id:any){
    return this.http.get('http://localhost:3000/booking/getbooking/'+id);
  }
  editBooking(booking:any)
  {   
    return this.http.put('http://localhost:3000/booking/editbookings',booking)
    .subscribe(data =>{console.log(data)})
    
  }
  deleteBooking(id:any)
  {

    return this.http.delete('http://localhost:3000/booking/deletebooking/'+id)

  }
  checkavailabilty(bookingDetails:any)
  {
    console.log(bookingDetails)
    return this.http.get("http://localhost:3000/admin/check", {params:bookingDetails})
  }
}
