import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 0
  };

  registerUser() {
    // Perform registration logic here
    console.log(this.user);
  }
}
