import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  constructor(private service: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.employee = this.service.getEmployee(this._id);
    })
  }
  viewNextEmployee(){
    if(this._id < 3){
      this._id = this._id + 1;
    }else{
      this._id = 1; 
    }
    
    this.route.navigate(['/employees', this._id], {
      queryParamsHandling: 'preserve'
    });
  }
}