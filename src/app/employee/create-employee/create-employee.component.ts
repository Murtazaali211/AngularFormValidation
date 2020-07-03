import { Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../shared/employee.model';
import {EmployeeService} from '../../shared/employee.service';
import {Router} from '@angular/router';
import {Department} from '../../shared/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // dateOfBirth: '02/02/2020';
  @ViewChild('employeeForm', {static:true}) public createEmployeeForm: NgForm;    
  gender = 'male';
  previewPhoto = false;
   datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    email: null,
    phoneNumber: null,
    dateOfBirth: null,
    department: null,
    isActive: false,    
    photoPath: null,    
    password: null,
    confirmPassword: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk'},
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT'},
    { id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'}
  ];
  constructor(private service: EmployeeService,
              private route: Router) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
      //  showWeekNumbers: false,
      //  minDate: new Date(2020, 0, 1),
      //  maxDate: new Date(2020,11,31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }
  togglePhotoPreview() {
   this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
  }
  saveEmployee(): void {
    //console.log(newEmployee);
    const newEmployee = Object.assign({}, this.employee);
    this.service.save(newEmployee);
    //empForm.reset();
    this.createEmployeeForm.reset();
    this.route.navigate(['/employee']);
  }
}
