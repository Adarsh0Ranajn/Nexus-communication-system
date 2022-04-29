import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {connections, Newcustomer, new_user_datatype, place_order_datatype, status_require} from './newcustomer';
import {retrive_order} from './newcustomer';
import { stock_current } from './stock';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }
  current_username:string="";
  current_pass:string="";
  take_user_session(user:string,pass:string){
    this.current_username=user;
    this.current_pass=pass;
  }

  get_userid_session(){
    return this.current_username;
  }
  get_userpass_session(){
    return this.current_pass;
  }
  getuserdetail(user_detail:string):Observable<any>{
    return this.http.get<Newcustomer>("http://localhost:1010/customer/currentuserdata/"+user_detail);
  }

  addcustomer(new_cus:new_user_datatype):Observable<any>{
    return this.http.post("http://localhost:1010/customer/addcustomer",new_cus);
  }
  findall():Observable<new_user_datatype[]>{
    return this.http.get<new_user_datatype[]>("http://localhost:1010/customer/customerlist");
  }
  addorder(new_order:place_order_datatype):Observable<any>{
    return this.http.post("http://localhost:1010/order/addorder",new_order);
  }
  vieworderbyuser(user_view:string):Observable<retrive_order[]>{
    return this.http.get<retrive_order[]>("http://localhost:1010/order/viewbyuser/"+user_view);
  }
  viewconnections(user_view:string):Observable<connections[]>{
    return this.http.get<connections[]>("http://localhost:1010/order/viewconnections/"+user_view);
  }
  update_userdata(usernewdetail:new_user_datatype):Observable<any>{
      return this.http.post("http://localhost:1010/customer/updatecustomer",usernewdetail);
  }
  getorder_created():Observable<retrive_order[]>{
    return this.http.get<retrive_order[]>("http://localhost:1010/order/viewbycreated");
  }
  getorder_technician():Observable<retrive_order[]>{
    return this.http.get<retrive_order[]>("http://localhost:1010/order/viewbytechnician");
  }
  getorder_active():Observable<stock_current[]>{
    return this.http.get<stock_current[]>("http://localhost:1010/order/viewbyactive");
  }
   
  updateorder_status(take_de:status_require):Observable<String>{
    return this.http.put("http://localhost:1010/order/updatestatus",take_de,{responseType:'text'});
  }
  getorder_all():Observable<retrive_order[]>{
    return this.http.get<retrive_order[]>("http://localhost:1010/order/findallorders");
  }
}
