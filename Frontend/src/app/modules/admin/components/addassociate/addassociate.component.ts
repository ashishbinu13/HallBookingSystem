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
  styleUrls: ['./addassociate.component.css'],
})
export class AddassociateComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public deptservice: DeptDataService,
    private router: Router
  ) {}
  user = {
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    deptName: '',
    designation: '',
    areaint: '',
    place: '',
    nation: '',
    role: '',
  };

  deptdata: any[] | undefined;
  deptselected: any = '';
  deptnames: any;
  errormessage: any;
  error: any;
  isInvalid!: boolean;

  ngOnInit(): void {
    this.deptservice.getDeptNames().subscribe((data: any) => {
      this.deptdata = JSON.parse(JSON.stringify(data));
    });
  }

  addAssociate(){
    var token=localStorage.getItem('accessToken') || '';
    var user = JSON.parse(atob(token.split('.')[1]));

    this.authService.addAssociate(this.user).subscribe(
      (data:any) => {
        if (this.authService.isAdmin()) {
          this.router.navigate(['/admin/home']);
        } else {
          this.router.navigate(['/associates/home']);
        }
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
        this.isInvalid = false;
      }
    );
  if(!this.isInvalid){
  }
}
  onChange(event: any) {
    this.user.deptName =
      event.target.options[event.target.options.selectedIndex].text;
  }
}
