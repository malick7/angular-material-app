import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }

  departments = [
    {id : 1, name: 'Technology' },
    {id : 2, name: 'HR' },
    {id : 3, name: 'Finance' },
  ];
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
