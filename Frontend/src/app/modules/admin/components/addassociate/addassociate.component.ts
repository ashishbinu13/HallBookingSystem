import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddingService } from 'src/app/services/adding.service';
import { AdminService } from 'src/app/services/admin.service';
import { DeptDataService } from 'src/app/services/dept-data.service';
import { HallDataService } from 'src/app/services/hall-data.service';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css']
})
export class AddassociateComponent implements OnInit {


  constructor(private addingService:AddingService,public deptservice:DeptDataService, private router:Router) { }
  addAssDetails={
    employeeName:'',
    ICTAKID:'',
    email:'',
    pass:'',
    phonenum:'',
    deptName:'',
    designation:'',
    areaint:'',
    place:'',
    nationality:''
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
    console.log(this.addAssDetails);
    this.addingService.addAssociate(this.addAssDetails);
    this.router.navigate(['/admin/home'])
  }
  onChange(event: any)
{
 this.addAssDetails.deptName=event.target.options[event.target.options.selectedIndex].text;

}

}
