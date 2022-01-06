import { Component, OnInit } from '@angular/core';
import { HallDataService } from 'src/app/services/hall-data.service';
import { BookingsService } from 'src/app/services/bookings.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
})
export class AddBookingComponent implements OnInit {
  title = 'Make Your Booking';

  constructor(
    public _bookingService: BookingsService,
    public _hallservice: HallDataService,
    public _router: Router,
    public _auth: AuthService
  ) {}
  bookingDetails = {
    employeeName: '',
    ICTAKId: '',
    bookingDate: '',
    hallName: '',
    startTime: '',
    endTime: '',
    eventDetails: '',
    username: '',
    dateStamp: new Date(),
  };

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
  mindatetoday: any;
  minmon: any;
  maxdate1: any;
  maxmon: any;
  error: any;
  isInvalid!: boolean;
  isAdmin!: boolean;

  ngOnInit(): void {
    this.isAdmin = this._auth.isAdmin();
    if (!this.isAdmin) {
      var userId = this._auth.getUser();

      this._auth.getAssociate(userId).subscribe((data) => {
        var userdata = JSON.parse(JSON.stringify(data));
        this.bookingDetails.employeeName = userdata.name;
        this.bookingDetails.ICTAKId = userdata.username;
      });
    }

    this._hallservice.getHallNames().subscribe((data) => {
      this.halldata = JSON.parse(JSON.stringify(data));
    });

    this.getmindate();
    this.getmaxdate();
  }

  getmaxdate() {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 15);

    if (this.date.getDate() < 10) {
      this.maxdate1 = '0' + this.date.getDate();
    } else {
      this.maxdate1 = this.date.getDate();
    }
    if (this.date.getMonth() + 1 < 10) {
      this.maxmon = '0' + (this.date.getMonth() + 1);
    } else {
      this.maxmon = this.date.getMonth() + 1;
    }

    this.maxdate =
      this.date.getFullYear() + '-' + this.maxmon + '-' + this.maxdate1;
  }

  getmindate() {
    this.todaydate = new Date();
    this.todaydate.setDate(this.todaydate.getDate());

    if (this.todaydate.getDate() < 10) {
      this.mindatetoday = '0' + this.todaydate.getDate();
    } else {
      this.mindatetoday = this.todaydate.getDate();
    }
    if (this.todaydate.getMonth() + 1 < 10) {
      this.minmon = '0' + (this.todaydate.getMonth() + 1);
    } else {
      this.minmon = this.todaydate.getMonth() + 1;
    }
    this.mindate =
      this.todaydate.getFullYear() +
      '-' +
      this.minmon +
      '-' +
      this.mindatetoday;
  }

  saveBookings() {
    var token = localStorage.getItem('accessToken') || '';
    var user = JSON.parse(atob(token.split('.')[1]));
    this.bookingDetails.username = user.aud;

    if (this.bookingDetails.endTime > this.bookingDetails.startTime) {
      this._bookingService.saveBookings(this.bookingDetails).subscribe(
        (data) => {
          if (this._auth.isAdmin()) {
            this._router.navigate(['/admin/home']);
          } else {
            this._router.navigate(['/associates/home']);
          }
        },
        (response) => {
          this.error = response.error.message;
          this.isInvalid = false;
        }
      );
    } else {
      this.errormessage = 'Endtime should be greater than starttime ';
    }
    if (!this.isInvalid) {
    }
  }

  onChange(event: any) {
    this.bookingDetails.hallName =
      event.target.options[event.target.options.selectedIndex].text;
  }

  Clearmessage() {
    this.errormessage = '';
    // this._bookingService.checkavailabilty(this.bookingDetails)
    // .subscribe((data)=>{console.log(data)})
  }
}
