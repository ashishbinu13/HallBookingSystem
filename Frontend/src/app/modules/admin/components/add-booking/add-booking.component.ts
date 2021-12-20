import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
})
export class AddBookingComponent implements OnInit {
  title = 'Hall Booking Form';
  constructor(public adminService: AdminService) {}

  bookingDetails = {
    employeeName: '',
    ICTAKId: '',
    bookingDate: '',
    hallName: '',
    startTime: '',
    endTime: '',
    empEmail: '',
    desc: '',
    dateStamp: new Date(),
  };

  ngOnInit(): void {}
  saveBookings() {
    console.log(this.bookingDetails);
    this.bookingDetails.hallName = 'hall 1';
    this.adminService.saveBookings(this.bookingDetails);
    alert('success');
  }
}
