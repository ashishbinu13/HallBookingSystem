import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { BookingsService }  from 'src/app/services/bookings.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookingdetails:any=[{
    
  }]
 
  constructor(private router:Router,private bookingsService:BookingsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:any) =>
      {        
        this.bookingsService.getBooking(params.get("id")).subscribe((data:any)=>{
        this.bookingdetails=JSON.parse(JSON.stringify(data));
        })
      }) 
  }
  editBooking(booking:any)
  {
    localStorage.setItem("editbookingId", booking._id.toString());
    this.router.navigate(['admin/bookings/editbooking']);

  }
  deleteBooking(product:any)
  {
    this.activatedRoute.paramMap.subscribe((params) =>
    {        
      this.bookingsService.deleteBooking(params.get("id"));  
      this.router.navigate(['/admin/home']);
      }) 

  }
}
