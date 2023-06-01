import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 3ca69ee45493412f7f082a12bc930da9818f9ed7

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectpageComponent } from './components/subjectpage/subjectpage.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
<<<<<<< HEAD
  declarations: [
    AppComponent,
    LoginComponent,
    SubjectpageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
=======
  declarations: [AppComponent, LoginComponent, SubjectpageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
>>>>>>> 3ca69ee45493412f7f082a12bc930da9818f9ed7
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
