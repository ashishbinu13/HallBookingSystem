import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isInvalid: boolean = false;
  errorMessage: string = '';
  user = { username: '', password: '' };
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this._auth.loginUser(this.user).subscribe(
      (res) => {
        this.isInvalid = false;
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);

        if (this._auth.isAdmin()) {
          this._router.navigate(['/admin/home']);
        } else {
          this._router.navigate(['/associates/home']);
        }
      },
      (response) => {
        this.errorMessage = response.error.message;
        this.isInvalid = true;
      }
    );
  }
}
