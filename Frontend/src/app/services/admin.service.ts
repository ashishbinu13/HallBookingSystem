import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  saveBookings( bookingDetails:any)
  {
    console.log(bookingDetails);
    return this.http.post<any>("http://localhost:3000/adminbookinginsert",bookingDetails)
    .subscribe((data)=>{console.log(data)});

  }
}
