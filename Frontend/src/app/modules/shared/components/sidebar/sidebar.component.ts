import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  nav = {
    home: '',
    bookHall: '',
    associates: '',
    viewBookings: '',
    profile:'',
  };
 username="";
  constructor(public _auth: AuthService, public _router:Router) {}


  ngOnInit(): void {

    var token = localStorage.getItem('accessToken') || '';
    var user = JSON.parse(atob(token.split('.')[1]));
    this.username= user.aud;

    if (this._auth.isAdmin()) {
      this.nav.home = '/admin/home';
      this.nav.bookHall = '/admin/bookHall';
      this.nav.associates = '/admin/associates';
      this.nav.viewBookings = '/admin/calendar';
      this.nav.profile = '/admin/profile';
    }
    else{
      this.nav.home = '/associates/home';
      this.nav.bookHall = '/associates/bookHall';
      this.nav.viewBookings = '/associates/calendar';
      this.nav.profile = '/associates/profile';

    }
  }
  logoutUser() {
    localStorage.clear();
    this._router.navigate(['']);
  }
}
