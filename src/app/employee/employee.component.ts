import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './Iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

    employees:Employee[]=[];
    constructor (private employeeService:EmployeeService, private router:Router){

    }

    ngOnInit(): void{
      this.employeeService.getEmployees().subscribe(data => this.employees=data);
    }

    onClick(){
      this.router.navigate(["/add"]);
    }
}
