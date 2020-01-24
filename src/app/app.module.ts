import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FieldErrorDisplayComponent,
    HomeComponent,
    LoginComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
