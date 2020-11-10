import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  formdata;
  emailid;
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      age: new FormControl(),
    });
  }

  getEmployeees() {
    this.employeeService.sendGetRequest().subscribe(data => {
      console.log(data);
    })
  }

  onClickSubmit(data) {
    this.employeeService.postUser(data).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
