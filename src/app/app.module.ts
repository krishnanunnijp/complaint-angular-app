import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AgminNavbarComponent } from './agmin-navbar/agmin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component'

const myRouter:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },{
    path:"signup",
    component:UserSignupComponent
  },{
    path:"dash",
    component:DashboardComponent
  },{
    path:"user",
    component:UserLoginComponent
  },{
    path: "profile",
    component:UserProfileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserSignupComponent,
    DashboardComponent,
    UserLoginComponent,
    UserProfileComponent,
    AgminNavbarComponent,
    UserNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
