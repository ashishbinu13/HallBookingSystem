import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';
import { DatePipe } from '@angular/common'
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

constructor(private _bookingService:BookingsService,private router:Router) { }

 //bookingdetails:any[] | undefined
 bookingdetails:any=[{
    
}]


  ngOnInit(): void {
this._bookingService. getBookingslist().subscribe((data)=>{
this.bookingdetails=JSON.parse(JSON.stringify(data));

 })
  }
  editBookings(bookings:any)
  {
    localStorage.setItem("editbookingId",bookings._id.toString());
    this.router.navigate(['/admin/bookings/editbooking']);

  }

  
  deleteBookings(bookings:any)
  {
    this._bookingService.deleteBookings(bookings._id)
      .subscribe((data) => {
        this.bookingdetails = this.bookingdetails.filter((b: any) => b !== bookings);
      })
  }
}
