import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
@Injectable({
  providedIn: 'root'
})
export class VendorserService {

  constructor(public http:HttpClient) { }

  storevendor(ven:Vendor):Observable<any>{
    return this.http.post("http://localhost:1010/vendor/storevendor",ven);
  }
  findall():Observable<Vendor[]>{
    return this.http.get<Vendor[]>("http://localhost:1010/vendor/findallvendor");
  }
  updatevendor(ven:Vendor):Observable<string>{
    return this.http.put("http://localhost:1010/vendor/updatevendor",ven,{responseType:'text'});
  }
deletevendor(_id:Number):Observable<string>{
  return this.http.delete("http://localhost:1010/vendor/deletevendor/"+_id,{responseType:'text'})
} 


}
