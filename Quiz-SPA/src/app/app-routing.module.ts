import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ExameditComponent } from './components/examedit/examedit.component';

import { LoginComponent } from './components/login/login.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ResultTestComponent } from './components/result-test/result-test.component';
import { SubjectpageComponent } from './components/subjectpage/subjectpage.component';
import { ExamComponent } from './components/Exam/exam.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'subjects/:subjectId/result/:grade', component: ResultTestComponent },
  { path: 'subjects', component: SubjectpageComponent },
  {path: 'subjects/:subjectId', component: ExamComponent},
  { path: 'admin', component: AdminpageComponent },
  { path: 'admin/edit/:id', component: ExameditComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
