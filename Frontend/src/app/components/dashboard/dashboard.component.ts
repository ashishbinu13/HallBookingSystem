import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  bookingdetails: any = [{}];
  constructor(
    private _bookingService: BookingsService,
    private router: Router,private authService: AuthService
  ) {}
 

 
 


  ngOnInit(): void {
    this._bookingService.getBookingslist().subscribe((data) => {
      this.bookingdetails = JSON.parse(JSON.stringify(data));
    });
  }
  editBookings(bookings: any) {
    localStorage.setItem('editbookingId', bookings._id.toString());
    this.router.navigate(['/admin/bookings/editbooking']);
  }

}
