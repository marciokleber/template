import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginPageRoutingModule} from './login-routing.module';
import {LoginPage} from "./login.page";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginPageModule {
}
