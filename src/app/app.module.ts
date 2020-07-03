import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { DisplayEmployeesComponent } from './employee/display-employees/display-employees.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { EmployeeService } from './shared/employee.service';
import { CreateEmployeeCanDeactivateGuardService } from './employee/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { EmployeeFilterPipe } from './employee/employee-filter';
import { EmployeeListResolverService } from './employee/employee-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FieldErrorDisplayComponent,
    HomeComponent,
    LoginComponent,
    ConfirmEqualValidatorDirective,
    CreateEmployeeComponent,
    DisplayEmployeesComponent,
    SelectRequiredValidatorDirective,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService, EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
