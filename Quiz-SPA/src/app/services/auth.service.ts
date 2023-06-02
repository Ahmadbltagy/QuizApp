import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3005/';
  users: any;
  validEmail: any;
  constructor(private _http: HttpClient, private router: Router) {
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

  register(registerModel:any): Observable<any>{
    // let reg = registerModel.controls;
    // let newModel: any= {
    //   "role": "normal",
    //   "name": reg.name,
    //   "email": reg.email,
    //   "password": reg.passwoed,
    //   "age": reg.age
    // }
    return this._http.post(`${this.baseUrl}users`, registerModel);
  }


}
