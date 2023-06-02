import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ExameditComponent } from './components/examedit/examedit.component';

const routes: Routes =
[
  { path: 'register', component: RegisterComponent },
  {path: 'admin', component:AdminpageComponent},
  {path: 'admin/:id/edit', component:ExameditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
