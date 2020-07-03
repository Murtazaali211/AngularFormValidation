import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {Employee} from '../../shared/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit{//, OnChanges {
  // @Input() employeeId: number;
  // private _employee: Employee;
  // @Input()
  // set employee(val: Employee){
  //  // console.log('Pre : ' + (this._employee? this._employee.name: 'NULL'));
  //   //console.log('Cur : ' + val.name);
  //   this._employee = val;
  // }
  // get employee(): Employee{
  //   return this._employee;
  // }
  @Input() employee: Employee;
  private selectedEmployeeId: number;
  //@Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployeeId = +this.route.snapshot.paramMap.get('id');
  }
  // ngOnChanges(changes: SimpleChanges){
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;

  //   //console.log('previous : ' + (previousEmployee ? previousEmployee.name: 'NULL'));
  //   //console.log('Current : ' + currentEmployee.name);
  //   for(const propName of Object.keys(changes)){
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);
  //     console.log(propName + ' changed from ' + from + ' to ' + to);
  //   }    
  // }
  // handleClick(){
  //   this.notify.emit(this.employee);
  // }

  // getEmployeeNameAndGender(): string{
  //   return this.employee.name + ' ' + this.employee.gender;
  // }
}
