import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee.model';
import {EmployeeService} from '../shared/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  //searchText: string;
  private _searchText: string;
  get searchText(): string{
    return this._searchText;
  }
  set searchText(value: string){
    this._searchText = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(search: string){
    return this.employees.filter(employee => 
      employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }
  //employeeToDisplay: Employee;
 // private arrayIndex = 1;
 //dataFromChild: Employee;
  constructor(private service: EmployeeService,
    private route: Router,
    private _activatedRoute: ActivatedRoute) { 
      this.employees = this._activatedRoute.snapshot.data['employeeList'];
      if (this._activatedRoute.snapshot.queryParamMap.has('searchText')){
        this.searchText = this._activatedRoute.snapshot.queryParamMap.get('searchText');
      }else { 
        this.filteredEmployees = this.employees;
      }
    }

  ngOnInit() {
   //this.employees = this.service.getEmployees();
  //  this.service.getEmployees().subscribe(emplist => {
  //   this.employees = emplist
  //   if (this._activatedRoute.snapshot.queryParamMap.has('searchText')){
  //     this.searchText = this._activatedRoute.snapshot.queryParamMap.get('searchText');
  //   }else {
  //     this.filteredEmployees = this.employees;
  //   }
  // } 
  // );
     
   //this.filteredEmployees = this.employees;
  // this.employeeToDisplay = this.employees[0];
  // console.log(this._activatedRoute.snapshot.queryParamMap.has('searchText')); // to work with query parameter map property we use queryparamMap
  // console.log(this._activatedRoute.snapshot.queryParamMap.get('searchText'));
  // console.log(this._activatedRoute.snapshot.queryParamMap.getAll('searchText'));
  // console.log(this._activatedRoute.snapshot.queryParamMap.keys);
  // console.log(this._activatedRoute.snapshot.paramMap.keys); //for optinal route parameters
   
  }
  // nextEmployee(): void{
  //   if(this.arrayIndex <= 2){
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   }else{
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }
  // handleNotify(eventData: Employee){
  //   this.dataFromChild = eventData;
  // }
  changeEmployeeName(){
    this.employees[0].name = 'Jordan';
    this.filteredEmployees = this.filterEmployees(this.searchText);
    // const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    // newEmployeeArray[0].name = 'Jordan';
    // this.employees = newEmployeeArray; 
  }
//   onMouseMove(){

//   }
//   onClick(id: number){
//     this.route.navigate(['/employees', id],{
//       queryParams: {'searchText': this.searchText, 'testParam': 'testValue'}
//     });
//   }

onDeleteNotification(id: number){
  const i = this.filteredEmployees.findIndex( e => e.id === id);
  if(i !== -1){
    this.filteredEmployees.splice(i, 1);
  }

}
}
