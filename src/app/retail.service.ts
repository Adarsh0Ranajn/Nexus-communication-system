import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RetailDatatype } from './retail-datatype';

@Injectable({
  providedIn: 'root'
})
export class RetailService {

  constructor(public http:HttpClient) { }
  storeretail(ven:RetailDatatype):Observable<any>{
    return this.http.post("http://localhost:1010/retail/storeretail",ven);
  }
  findall():Observable<RetailDatatype[]>{
    return this.http.get<RetailDatatype[]>("http://localhost:1010/retail/findallretail");
  }
  updateretail(ven:RetailDatatype):Observable<string>{
    return this.http.put("http://localhost:1010/retail/updateretail",ven,{responseType:'text'});
  }
deleteretail(_id:Number):Observable<string>{
  return this.http.delete("http://localhost:1010/retail/deleteretail/"+_id,{responseType:'text'})
} 

}
