import { Component, OnInit } from '@angular/core';
import { BookingsService }  from 'src/app/services/bookings.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {
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
  constructor(private bookingsService:BookingsService,private router:Router) { }

  ngOnInit(): void {

    let bookingId = localStorage.getItem("updatebookingId");
    this.bookingsService.getBooking(bookingId).subscribe((data)=>{
    this.bookingDetails=JSON.parse(JSON.stringify(data));
  })
  }
  editBooking()
  {    
    this.bookingsService.editBooking(this.bookingDetails);   
    this.router.navigate(['/admin/home']);
  }
}
