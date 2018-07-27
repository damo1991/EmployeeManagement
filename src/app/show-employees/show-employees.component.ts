import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import {EmployeeService} from '../Helper/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {
employees: Employee[];
  constructor(private _employeeService:EmployeeService,private _router:Router) { }

  ngOnInit() {
this._employeeService.getEmployees().subscribe(
  data=>{
    console.log(data)
    this.employees=data
    console.log(this.employees)
  }
);
  }

  addDetails(){
    this._router.navigate(['register']);
  }

}
