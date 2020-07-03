import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Pipe({
    name: 'employeeFilter',
    pure: true
})
export class EmployeeFilterPipe implements PipeTransform{
    private counter = 0;
    transform(employees: Employee[], searchText: string): Employee[]{
        this.counter++;
        console.log('filter pipe executed count ' + this.counter);
        if(!employees || !searchText){
            return employees;
        }
        return employees.filter(employee => 
            employee.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }
}