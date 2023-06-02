import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3005/';
  users: any;
  validEmail: any;
  constructor(private _http: HttpClient) {
    this._http.get(`${this.baseUrl}users`).subscribe({
      next: (res) => (this.users = res),
      error: (err) => console.log(err),
    });
  }

  loggedIn(userModel: any) {
    console.log(this.users);
    this.validEmail = this.users.find(
      (e: any) => e.email == userModel.email && e.password == userModel.password
    );
    if (this.validEmail) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('role', this.validEmail.role);
      localStorage.setItem('name', this.validEmail.name);
      return true;
    } else {
      localStorage.setItem('loggedIn', 'false');
      return false;
    }

  }
}
