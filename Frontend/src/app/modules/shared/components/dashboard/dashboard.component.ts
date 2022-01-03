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
  title="UPCOMING EVENTS"
  bookingdetails: any = [{}];
  constructor(
    private _bookingService: BookingsService,
    private router: Router,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    var token = localStorage.getItem('accessToken') || '';
    var user = JSON.parse(atob(token.split('.')[1]));
  console.log(user);
   if (user.role=='ADMIN')
   {
    this._bookingService.getBookingslist().subscribe((data) => {
      this.bookingdetails = JSON.parse(JSON.stringify(data));
    });
   }
  else
   {
    var username= user.aud;
    console.log(username);
       this._bookingService.getBookingslistbyid(username).subscribe((data) => {
      this.bookingdetails = JSON.parse(JSON.stringify(data));
      console.log(this.bookingdetails)

    });


   }

  }

  editBookings(bookings: any) {
    localStorage.setItem('editbookingId', bookings._id.toString());
    if(this._auth.isAdmin())
    {
    this.router.navigate(['/admin/editbooking']);
    }
    else
    {
      this.router.navigate(['/associates/editbooking']);

    }
  }

  deleteBookings(bookings: any) {
    this._bookingService.deleteBookings(bookings._id).subscribe((data) => {
      this.bookingdetails = this.bookingdetails.filter(
        (b: any) => b !== bookings
      );
    });
  }
}