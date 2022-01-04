import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HallDataService } from 'src/app/services/hall-data.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css'],
})
export class EditBookingComponent implements OnInit {
  title = 'Edit Your Booking';
 
  constructor(
    private bookingsService: BookingsService,
    private router: Router,
    private __hallservice: HallDataService,
    private _auth: AuthService
  ) {}
  bookingDetails: any = [{}];
  
  halldata: any[] | undefined;
  mindate: any = '';
  maxdate: any = '';
  date: any;
  newdate: any;
  todaydate: any;
  hallselected: any = '';
  hallnames: any;
  starttime: any;
  endTime: any;
  timediff: any;
  errormessage: any;
  
  ngOnInit(): void {
    let bookingId = localStorage.getItem('editbookingId');
    this.bookingsService.getBooking(bookingId).subscribe((data) => {
      this.bookingDetails = JSON.parse(JSON.stringify(data));
     
    });
    this.__hallservice.getHallNames().subscribe((data) => {
      this.halldata = JSON.parse(JSON.stringify(data));
      console.log(this.halldata);
    });

    this.getmindate();
    this.getmaxdate();
  }
  getmaxdate() {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 15);
    this.maxdate =
      this.date.getFullYear() +
      '-' +
      (this.date.getMonth() + 1) +
      '-' +
      this.date.getDate();
  }

  getmindate() {
    this.todaydate = new Date();
    this.todaydate.setDate(this.todaydate.getDate());
    this.mindate =
      this.todaydate.getFullYear() +
      '-' +
      (this.todaydate.getMonth() + 1) +
      '-' +
      this.todaydate.getDate();
  }

  onChange(event: any) {
    this.bookingDetails.hallName =
      event.target.options[event.target.options.selectedIndex].text;
  }

  
  editBookings() {
    
    if(this._auth.isAdmin()){
    this.bookingsService.editBookings(this.bookingDetails);
    alert('Successfully edited');
    this.router.navigate(['/admin/home']);
    }
    else{
      this.bookingsService.editBookings(this.bookingDetails);
    alert('Successfully edited');
    this.router.navigate(['/associates/home']);
    }
  }

}
