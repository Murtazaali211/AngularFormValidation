import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {EmployeeComponent} from './employee/employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employee/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { EmployeeListResolverService } from './employee/employee-list-resolver.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employee', 
    component: EmployeeComponent,
    resolve: {employeeList: EmployeeListResolverService}
  },
  { path: 'createEmployee', 
  component: CreateEmployeeComponent,
  canDeactivate: [CreateEmployeeCanDeactivateGuardService]
},
{ path: 'employees/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
