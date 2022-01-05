import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HallDataService } from 'src/app/services/hall-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
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
  bookingDetails = {
    employeeName: '',
    ICTAKId: '',
    bookingDate: '',
    hallName: '',
    startTime: '',
    endTime: '',
    eventDetails: '',
    username:'',
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
  mindatetoday:any;
  minmon:any;
  maxdate1:any;
  maxmon:any;
  error:any;


  // editForm = new FormGroup({
  //   employeeName: new FormControl(''),
  //   ICTAKId: new FormControl(''),
  //   bookingDate: new FormControl(''),
  //   hallName: new FormControl(''),
  //   startTime: new FormControl(''),
  //   endTime: new FormControl(''),
  //   eventDetails: new FormControl(''),
  //   username: new FormControl(''),
  //   dateStamp:new FormControl(''),
  // });

  // errorMessage: string = '';
  // isInvalid: boolean = false;


  ngOnInit(): void {
    let bookingId = localStorage.getItem('editbookingId');
    this.bookingsService.getBooking(bookingId).subscribe((data) => {
      this.bookingDetails = JSON.parse(JSON.stringify(data));
     
    });
    this.__hallservice.getHallNames().subscribe((data) => {
      this.halldata = JSON.parse(JSON.stringify(data));
     
    });

    this.getmindate();
    this.getmaxdate();
  }
  getmaxdate() {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + 15);

    if(this.date.getDate()<10)
    {
      this.maxdate1="0"+this.date.getDate();
    }
    else{
      this.maxdate1=this.date.getDate();

    }
    if((this.date.getMonth() + 1) <10)
    {
      this.maxmon="0"+(this.date.getMonth() + 1);
    }
    else{
      this.maxmon=this.date.getMonth()+1;

    }
    


    this.maxdate =this.date.getFullYear() +'-' +this.maxmon + '-' +this.maxdate1;
      
  }

  getmindate() {
    this.todaydate = new Date();
    this.todaydate.setDate(this.todaydate.getDate());

     if (this.todaydate.getDate()<10)
     {
      this.mindatetoday="0"+this.todaydate.getDate();
     }
     else
     {
      this.mindatetoday=this.todaydate.getDate();

     }
     if((this.todaydate.getMonth() + 1)<10)
     {
      this.minmon= "0"+(this.todaydate.getMonth() + 1);
     }
     else
     {
      this.minmon=(this.todaydate.getMonth() + 1)

     }
    this.mindate =this.todaydate.getFullYear() +'-' + this.minmon+'-' +this.mindatetoday;

    

  }


  onChange(event: any) {
    this.bookingDetails.hallName =
      event.target.options[event.target.options.selectedIndex].text;
  }

  
  editBookings() {
    
    
    var token = localStorage.getItem('accessToken') || '';
    var user= JSON.parse(atob(token.split('.')[1]));
    this.bookingDetails.username = user.aud;

    if (this.bookingDetails.endTime > this.bookingDetails.startTime) {
       this.bookingsService.editBookings(this.bookingDetails)
        .subscribe( 
        (data)=>
        {
        this.ngOnInit();},
        (response)=>{
       
        this.error=response.error.message;
       
      }
      
        );
    
       if (this._auth.isAdmin()){
        
         this.router.navigate(['/admin/home'])}
        else{
         
           this.router.navigate(['/associates/home'])}
      
      
    } 
    else 
    {
      this.errormessage = 'Endtime should be greater than starttime ';
    }

  

  }
  Clearmessage() {
    this.errormessage = '';
   
 
  }
}