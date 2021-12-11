import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
 title = "Hall Booking Form";
  constructor( public _adminService:AdminService) { }

  bookingDetails={
    empName:"",
    empId:"",
    bookingDate:"",
    hallName: "",
    startTime:"",
    endTime:"",
    empEmail:"",
    desc:""
  }

  ngOnInit(): void {
  }

  saveBookings()
  {
     this._adminService.saveBookings(this.bookingDetails);
     alert("success");

  }

}
