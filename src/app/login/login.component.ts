import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Name: string = '';
  Email: string | any = '';
  Password: string | any = '';

  isRememberMeClicked: boolean = false;

  message: string = '';
  toggleStatus: Boolean = false;
  Toggle = () => {
    this.toggleStatus = false;
  };

  userExists = () => {
    this._authServices.userExists(this.Email, this.Password).subscribe((l) => {
      if (l.length == 0) {
        this.toggleStatus = true;
        this.message = 'Not successfull';
      }
      if (l != null) {
        l.forEach((element) => {
          if (element.userId >= 1) {
            if (this.isRememberMeClicked == true) {
              localStorage.setItem('email', this.Email);
            }
            sessionStorage.setItem('email', this.Email);
            sessionStorage.setItem('userId', element.userId);
            if (sessionStorage.getItem('isFirstTime') == null) {
              this.router.navigate(['forgotPassword']);
            } else {
              this.router.navigate(['addProject']);
            }
          }
        });
      }
    });
  };

  changeStatus() {
    this.isRememberMeClicked = !this.isRememberMeClicked;
  }

  constructor(private _authServices: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('email') != null) {
      this.Email = localStorage.getItem('email');
      this.Password = localStorage.getItem('password');
      sessionStorage.setItem('isFirstTime', 'true');
    }
  }
}
