import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

 storeemployee(emp:Employee):Observable<any>{
    return this.http.post("http://localhost:1010/emp/store",emp);
  }
  findall():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:1010/emp/findall");
  }
  updateemployee(emp:Employee):Observable<string>{
    return this.http.put("http://localhost:1010/emp/updatesalary",emp,{responseType:'text'});
  }
deleteemployee(_id:Number):Observable<string>{
  return this.http.delete("http://localhost:1010/emp/delete/"+_id,{responseType:'text'})
} 
}
