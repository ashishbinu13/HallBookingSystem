import { Component, OnInit } from '@angular/core';
import { HallDataService } from 'src/app/services/hall-data.service';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { Router } from '@angular/router';
// import { AdminService } from 'src/app/services/admin.service';
import { BookingsService } from 'src/app/services/bookings.service';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  title = 'Make Your Booking';

  
  constructor(public _bookingService: BookingsService, public __hallservice:HallDataService,private router:Router) {}
  bookingDetails = {
    employeeName: '',
    ICTAKId: '',
    bookingDate: '',
    hallName: '',
    startTime: '',
    endTime: '',
    eventDetails: '',
    dateStamp: new Date(),
  };
  
  halldata:any[] | undefined;
  mindate:any=""
  maxdate:any=""
  date:any
  newdate:any
  todaydate:any
  hallselected:any=""
  hallnames:any
  starttime:any;
  endTime:any;
 timediff:any;
 errormessage:any




  ngOnInit(): void {

    this.__hallservice.getHallNames().subscribe((data)=>{
      this.halldata= JSON.parse(JSON.stringify(data));
       console.log(this.halldata);
            
     })
    
     this.getmindate()
     this.getmaxdate()

  }

  getmaxdate() {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 15);
    this.maxdate= this.date.getFullYear()+ '-' +(this.date.getMonth() + 1) + '-' +this.date.getDate()  ;
    // this.maxdate= this.date.getFullYear()+ '-' +(this.date.getMonth() + 1) + '-' +this.date.getDate()+'T00:00'   ;

  }

  getmindate()
  {
    this.todaydate = new Date();
    this.todaydate.setDate(this.todaydate.getDate());
    this.mindate= this.todaydate.getFullYear()+ '-' +(this.todaydate.getMonth() + 1) + '-' +this.todaydate.getDate()  ;
    // this.mindate= this.todaydate.getFullYear()+ '-' +(this.todaydate.getMonth() + 1) + '-' +this.todaydate.getDate()+'T00:00'   ;
  }

  saveBookings() {
    
 this._bookingService. saveBookings(this.bookingDetails)
  // .subscribe((data)=>{console.log(data)})
  alert("Success");
    this.router.navigate(['/admin/home']);
}

onChange(event: any)
{
 this.bookingDetails.hallName=event.target.options[event.target.options.selectedIndex].text;

}


Clearmessage() {
  this.errormessage="";
}



}
