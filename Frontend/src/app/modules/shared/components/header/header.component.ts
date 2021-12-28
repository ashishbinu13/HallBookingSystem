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

  ngOnInit(): void {}

  logoutUser() {
    localStorage.clear();
    this._router.navigate(['']);
  }
}
