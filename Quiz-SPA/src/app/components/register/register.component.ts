import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _authService: AuthService, private router:Router) {}
  // public user = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   age: 0,
  // };
  public confirmed = false;
  public registerForm = new FormGroup({
    'name': new FormControl(null,[Validators.minLength(4), Validators.required]),
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password': new FormControl(null, [Validators.minLength(6), Validators.required]),
    'confirmPassword': new FormControl(null, [Validators.required]),
    'age': new FormControl(null, [Validators.min(18), Validators.max(30), Validators.required]),
    'role': new FormControl('normal')
  });


  register(){
    if(this.registerForm.invalid)
      return;
    console.log(this.registerForm);
    let formControls = {...this.registerForm.value}

    this._authService.register(formControls).subscribe((data)=>{
      this.router.navigateByUrl('/login');
    })
  }

  public checkConfirmPassword(){
    let pass = this.registerForm.controls.password.value;
    let conf = this.registerForm.controls.confirmPassword.value;

    if(pass == conf)
      this.confirmed = true;
    else
      this.confirmed = false;
  }
}
