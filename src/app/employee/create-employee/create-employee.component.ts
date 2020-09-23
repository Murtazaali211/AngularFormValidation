import { Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../shared/employee.model';
import {EmployeeService} from '../../shared/employee.service';
import {Router, ActivatedRoute} from '@angular/router';
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
  panelTitle;
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
              private route: Router,
              private _routes: ActivatedRoute) {
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
    this._routes.paramMap.subscribe(params => {
       const id = +params.get('id');
       this.getEmployee(id);
    });
  }

  private getEmployee(id: number){
    if(id === 0){
      this.employee = {
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
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
    }
    else{
      this.panelTitle = 'Edit Employee';
      this.employee = Object.assign({},this.service.getEmployee(id));
    }
  }
  saveEmployee(): void {
    console.log(this.employee);    
    const newEmployee: Employee = Object.assign({}, this.employee);
    console.log(newEmployee);
    this.service.save(newEmployee);
    //empForm.reset();
    //this.createEmployeeForm.reset();
    this.route.navigate(['/employee']);
  }
}
