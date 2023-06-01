import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  loginUser() {
    // Add your login logic here
    console.log('Login button clicked');
    console.log('Email:', this.user.email);
    console.log('Password:', this.user.password);
  }
}
