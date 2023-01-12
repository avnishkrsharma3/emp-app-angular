import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Iemployee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://");
  }
  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>("http://", employee);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>("http://"+id);
  }
  updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>("http://"+employee.id, employee);
  }
  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>("http://");
  }
 
  

}
