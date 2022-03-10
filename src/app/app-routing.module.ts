import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes=[
  {path:'createuser',   component: RegisterUserComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
