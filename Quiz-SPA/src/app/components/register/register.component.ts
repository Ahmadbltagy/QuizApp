import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _authService: AuthService) {}
  public user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 0,
  };

  registerUser() {}
}
