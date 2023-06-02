import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
<<<<<<< HEAD
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ExameditComponent } from './components/examedit/examedit.component';

const routes: Routes =
[
  { path: 'register', component: RegisterComponent },
  {path: 'admin', component:AdminpageComponent},
  {path: 'admin/:id/edit', component:ExameditComponent}

=======
import { LoginComponent } from './components/login/login.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ResultTestComponent } from './components/result-test/result-test.component';
import { SubjectpageComponent } from './components/subjectpage/subjectpage.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'result', component: ResultTestComponent },
  { path: 'subjects', component: SubjectpageComponent },
>>>>>>> 66e3059e90471e85389edbca707f4bae561b58b0
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
