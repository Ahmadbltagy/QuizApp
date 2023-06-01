import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    message: new FormControl('',Validators.required)
  })

  get getName(){
    return this.contactForm.controls["name"];
  }
  get getEmail(){
    return this.contactForm.controls["email"];
  }
  get getMessage(){
    return this.contactForm.controls["message"];
  }
}
