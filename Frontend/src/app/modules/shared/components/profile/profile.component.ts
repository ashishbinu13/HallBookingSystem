import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userDetails: any = [{}];

  constructor(private _authservice:AuthService) {}

  ngOnInit(): void {

  var token = localStorage.getItem('accessToken') || '';
    var user = JSON.parse(atob(token.split('.')[1]));
    var username= user.aud;

    
      this._authservice.getusers(username).subscribe((data) => {
        this.userDetails = JSON.parse(JSON.stringify(data));
        
      });
  }
  
}
