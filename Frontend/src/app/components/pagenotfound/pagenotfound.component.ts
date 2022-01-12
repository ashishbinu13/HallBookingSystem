import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent implements OnInit {
  nav!: string;
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    if (this._auth.isAdmin()) {
      this.nav = '/admin/home';
    } else {
      this.nav = '/associates/home';
    }
  }
}
