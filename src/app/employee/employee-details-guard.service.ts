import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeDetailGuardService implements CanActivate{
    constructor(private _empService: EmployeeService,
        private _router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const empExist = !!this._empService.getEmployee(+route.paramMap.get('id'));
        if(empExist){
            return true;
        }else{
            this._router.navigate(['notfound']);
            return false;
        }

    }
    
}