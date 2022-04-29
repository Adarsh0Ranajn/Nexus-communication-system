import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock,stock_current } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockserService {

  constructor(public http:HttpClient) {} 

  addstock(stk:Stock):Observable<any>{
    return this.http.post("http://localhost:1010/api/addproduct",stk);
  }
  viewproductbyvendor(vendor_view:string):Observable<stock_current[]>{
    return this.http.get<stock_current[]>("http://localhost:1010/api/viewbyvendor/"+vendor_view);
  }
  viewproductbyitemname():Observable<stock_current[]>{
    return this.http.get<stock_current[]>("http://localhost:1010/api/viewbyitem");
  }
  
}
