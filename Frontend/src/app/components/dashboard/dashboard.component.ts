import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';
import { DatePipe } from '@angular/common'

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService,private _bookingService:BookingsService) {}

 
 bookingdetails:any[] | undefined


  ngOnInit(): void {
 this._bookingService.getBookingslist().subscribe((data)=>{
this.bookingdetails=JSON.parse(JSON.stringify(data));
console.log(this.bookingdetails)
 })
  }

}
