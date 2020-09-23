import { Injectable } from '@angular/core';
import {Employee} from '../shared/employee.model';
import { Observable, of, from } from 'rxjs';
import { delay, max } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployeess = [
    new Employee(
      1,
       'Mark',
      'Male',
      'Email',
      'abc@gmail.com',
      '02154879654',
      '10/10/1990',
       '2',
      true,
      'assets/images/1.jpg',
      'abc',
      'abc'
),
  new Employee(
      2,
      'Marry',
      'Female',
      'Email',
      'abc@gmail.com',
      '0214587459654',
      new Date('10/10/1990'),
      '3',
      true,
    'assets/images/2.jpg',
    '123',
    '123'
),
new Employee(
  3,
   'Jhones',
  'Male',
  'Email',
  'xyz@gmail.com',
  '02154879654',
  '10/10/1990',
   '4',
  true,
  'assets/images/3.jpg',
  'abc123',
  'abc123'
),
new Employee(
  4,
   'Venkat',
  'Male',
  'Email',
  'venkat@gmail.com',
  '058154879654',
  '12/12/1990',
   '4',
  true,
  'assets/images/1.jpg',
  'abc123',
  'abc123'
)
  ];


  getEmployees(): Observable<Employee[]> {
    return of(this.listEmployeess);//.pipe(delay(2000));
  }
  getEmployee(id: number): Employee {
    return this.listEmployeess.find(e => e.id === id);
  }

  save(employee: Employee) {
    if(employee.id === null){
      const maxid = this.listEmployeess.reduce(function(e1, e2){
        return (e1.id > e2.id) ? e1: e2;
      }).id;
      employee.id  = maxid + 1;
      this.listEmployeess.push(employee);
    }
    else{
      const foundIndex = this.listEmployeess.findIndex(e => e.id === employee.id);
      this.listEmployeess[foundIndex] = employee;
    }
  }
  deleteEmployee(id: number){
    const foundIndex = this.listEmployeess.findIndex(e => e.id === id);
    if(foundIndex !== -1){
      this.listEmployeess.splice(foundIndex, 1);
    }
  }
}
