import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
 title = "Hall Booking Form";
  constructor() { }

  bookingDetails={
    empName:"",
    empID:"",
    bookingaDate:"",
    email:"",
    startTime:"",
    endTime:"",
    desc:""
  }

  ngOnInit(): void {
  }

}
