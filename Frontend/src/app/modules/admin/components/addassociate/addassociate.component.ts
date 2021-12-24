import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddingService } from 'src/app/services/adding.service';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { DeptDataService } from 'src/app/services/dept-data.service';
import { HallDataService } from 'src/app/services/hall-data.service';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css']
})
export class AddassociateComponent implements OnInit {


  constructor(private authService:AuthService,public deptservice:DeptDataService, private router:Router) { }
  user={
    name:'',
    username:'',
    email:'',
    password:'',
    phone:'',
    deptName:'',
    designation:'',
    areaint:'',
    place:'',
    nation:'',
    role:''
  };

  deptdata:any[] |undefined;
deptselected:any=""
  deptnames:any

  ngOnInit(): void {
    this.deptservice.getDeptNames().subscribe((data)=>{
      this.deptdata= JSON.parse(JSON.stringify(data));
       console.log(this.deptdata);
            
     })
  }
  
  addAssociate(){
    console.log(this.user);
    this.authService.addAssociate(this.user);
    this.router.navigate(['/admin/associates'])
  }
  onChange(event: any)
{
 this.user.deptName=event.target.options[event.target.options.selectedIndex].text;

}

}
