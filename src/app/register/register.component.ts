import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Name: string = '';
  Email: string = '';
  Password: string = '';

  createUser = () => {
    if (this.Name == '' || this.Email == '' || this.Password == '') {
      alert('Enter the value');
    } else {
      this._authServices
        .createUser(this.Name, this.Email, this.Password)
        .subscribe((r) => {
          if (r == true) {
            alert('Added successfully');
          } else {
            alert('Not successfull');
          }
        });

      this.Name = '';
      this.Email = '';
      this.Password = '';
    }
  };

  constructor(private _authServices: AuthService) {}

  ngOnInit(): void {}
}
