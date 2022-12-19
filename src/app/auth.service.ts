import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData } from 'src/Model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private obj: HttpClient) {}

  createUser = (Name: string, Email: string, Password: string) => {
    return this.obj.post(
      `https://localhost:7219/api/Register?firstName=${Name}&email=${Email}&password=${Password}`,
      null
    );
  };

  userExists = (Email: string, Password: string) => {
    return this.obj.get<userData[]>(
      `https://localhost:7219/api/Register?email=${Email}&password=${Password}`
    );
  };
}
