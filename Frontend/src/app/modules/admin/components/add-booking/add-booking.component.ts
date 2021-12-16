import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { HallDataService } from 'src/app/services/hall-data.service';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent  implements OnInit {
  title = 'Hall Booking Form';
 
  constructor( private _adminService:AdminService,private _hallservice:HallDataService ) { }
  bookingDetails = {
    employeeName: '',
    ICTAKId: '',
    bookingDate: '',
    hallName: '',
    startTime: '',
    endTime: '',
    // empEmail: '',
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
    this._hallservice.getHallNames().subscribe((data)=>{
     this.halldata= JSON.parse(JSON.stringify(data));
      console.log(this.halldata);
     this.getmindate()
     this.getmaxdate()
    
      
    })
   
  }

  getmindate()
  {
    this.todaydate = new Date();
    this.todaydate.setDate(this.todaydate.getDate());
    this.mindate= this.todaydate.getFullYear()+ '-' +(this.todaydate.getMonth() + 1) + '-' +this.todaydate.getDate()  ;
    // this.mindate= this.todaydate.getFullYear()+ '-' +(this.todaydate.getMonth() + 1) + '-' +this.todaydate.getDate()+'T00:00'   ;

  }

  getmaxdate()
  {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 15);
    this.maxdate= this.date.getFullYear()+ '-' +(this.date.getMonth() + 1) + '-' +this.date.getDate()  ;
    // this.maxdate= this.date.getFullYear()+ '-' +(this.date.getMonth() + 1) + '-' +this.date.getDate()+'T00:00'   ;

  }

    saveBookings() {

       if (this.bookingDetails.endTime>this.bookingDetails.startTime)
       {
        console.log("true")

       }
       else{
         this.errormessage="Endtime should be greater than starttime "      
          }
     this._adminService.checkavailabilty(this.bookingDetails)
      .subscribe((data)=>{console.log(data)})

   //this._adminService.saveBookings(this.bookingDetails);
  }


  Clearmessage()
  { 
    this.errormessage="";
  }
   onChange(event: any)
   {
    this.bookingDetails.hallName=event.target.options[event.target.options.selectedIndex].text;

   }
}
