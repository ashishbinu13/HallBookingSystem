import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

user = '';
role = '';


  constructor(private _authservice:AuthService) { }

  ngOnInit(): void {
    var token = this._authservice.getToken()||'';
    this.user = this._authservice.getUser(token).aud;
    this.role = this._authservice.getUser(token).role;
    console.log(this.user);
    }
  // getUser()
  // {
   
  // }

}


