import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from './associate.model';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-associates',
  templateUrl: './associates.component.html',
  styleUrls: ['./associates.component.css']
})
export class AssociatesComponent implements OnInit {

  user1!: User[];

  constructor(private _authService:AuthService,private router:Router) { }
  totalRecords: any;
  page:number=1
  ngOnInit(): void {
    this._authService.getass().subscribe((data)=>{
      this.user1=JSON.parse(JSON.stringify(data));
      this.totalRecords=this.user1.length;
    })
  }
  editass(user:any)
  {
    localStorage.setItem("editassId", user._id.toString());
    this.router.navigate(['admin/associates/editass']);

  }
  deleteass(user:any)
  {
    this._authService.deleteass(user._id)
      .subscribe((data) => {
        this.user1 = this.user1.filter(p => p !== user);
        this.totalRecords=this.user1.length;
      })
  

  }
}


