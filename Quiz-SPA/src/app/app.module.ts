import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectpageComponent } from './components/subjectpage/subjectpage.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultTestComponent } from './components/result-test/result-test.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExameditComponent } from './components/examedit/examedit.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubjectpageComponent,
    RegisterComponent,
    ResultTestComponent,
    FooterComponent,
    NavbarComponent,
    ExameditComponent,
    AdminpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
