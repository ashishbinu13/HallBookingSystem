import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DeptDataService } from 'src/app/services/dept-data.service';

@Component({
  selector: 'app-editassociate',
  templateUrl: './editassociate.component.html',
  styleUrls: ['./editassociate.component.css']
})
export class EditassociateComponent implements OnInit {
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
    let userId= localStorage.getItem("editassId");
    this.authService.getass1(userId).subscribe((data)=>{
    this.user=JSON.parse(JSON.stringify(data));
  })
    this.deptservice.getDeptNames().subscribe((data)=>{
      this.deptdata= JSON.parse(JSON.stringify(data));
       console.log(this.deptdata);
            
     })
  }
  onChange(event: any)
{
 this.user.deptName=event.target.options[event.target.options.selectedIndex].text;

}
editass(){
    this.authService.editass(this.user); 
    alert("Successfully edited"); 
    this.router.navigate(['/admin/associates'])
  }
}
