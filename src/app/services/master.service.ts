import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../pages/employee/employee.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient) { }

  getParentsDept(){
   return this.http.get<ApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment")
  }

  getAllChildsDept(){
    return this.http.get<ApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllChildDepartment")
   }
  getChildsDeptByParentId(id : number) : Observable<ApiResponse>{
    return this.http.get<ApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetChildDepartmentByParentId?deptId="+id)
   }
}
