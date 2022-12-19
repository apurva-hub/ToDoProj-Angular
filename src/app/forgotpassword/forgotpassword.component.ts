import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  first: string = '';
  second: string = '';
  third: string = '';
  fourth: string = '';

  message: string = '';
  toggleStatus: Boolean = false;
  Toggle = () => {
    this.toggleStatus = false;
  };

  onSubmit = () => {
    this.toggleStatus = true;
    this.message = 'Login successfull';
  };

  constructor() {}

  ngOnInit(): void {}
}
