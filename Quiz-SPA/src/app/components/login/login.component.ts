import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _authService: AuthService, private router: Router) {}
  model = {
    email: '',
    password: '',
  };

  loginUser() {
    if(this._authService.loggedIn(this.model)){
      this.router.navigateByUrl('home').then(()=>window.location.reload())


    }else{
      console.log("Error");
    }

  }
}
