import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css']
})
export class AddassociateComponent implements OnInit {

  constructor(private adminService:AdminService, private router:Router) { }
  addAssDetails={
    a_name:'',
    a_id:'',
    a_email:'',
    a_pass:'',
    halls:'',
    a_phone:'',
    a_place:'',
    a_nationality:''
  }

  ngOnInit(): void {
  }
  
  addAssociate(){
    console.log(this.addAssDetails);
    // this.adminService.addAssociate(this.addAssDetails);
    this.router.navigate(['/home/associates'])
  }
}
