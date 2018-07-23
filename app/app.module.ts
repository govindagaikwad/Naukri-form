import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NaukriForm } from './Naukri Form/form/form.component';
import { LoginForm } from './Naukri Form/login/login.component';
import { NaukriRouting } from './Naukri Form/RoutingForNoukri/routing.noukri.componnt';
import { NextFormForNaukri } from './Naukri Form/Save and next/nextform.component';
import { SignUpForm } from './Naukri Form/SignUp/signup.component';
import { StudentInfoSaveTable } from './AllStudentInformation/studentinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//for firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
//for material install
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent, NaukriForm, LoginForm, NextFormForNaukri, SignUpForm,StudentInfoSaveTable
  ],
  imports: [
    BrowserModule, NaukriRouting, FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
    BrowserAnimationsModule,MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
