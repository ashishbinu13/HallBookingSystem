import { Component, OnInit } from '@angular/core';
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
  };

  constructor(public _auth: AuthService) {}

  ngOnInit(): void {
    if (this._auth.isAdmin()) {
      this.nav.home = '/admin/home';
      this.nav.bookHall = '/admin/bookings/bookHall';
      this.nav.associates = '/admin/associates';
      this.nav.viewBookings = '/admin/bookings';
    }
  }
}
