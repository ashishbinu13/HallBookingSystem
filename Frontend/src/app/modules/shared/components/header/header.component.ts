import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  constructor(public _auth: AuthService, private _router: Router) {}
username="";
  ngOnInit(): void {var token = localStorage.getItem('accessToken') || '';
  var user = JSON.parse(atob(token.split('.')[1]));
  this.username= user.aud;}

  logoutUser() {
    localStorage.clear();
    this._router.navigate(['']);
  }
}
