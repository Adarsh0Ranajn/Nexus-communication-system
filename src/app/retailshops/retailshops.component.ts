import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { new_user_datatype, retrive_order, status_require } from '../newcustomer';

@Component({
  selector: 'app-retailshops',
  templateUrl: './retailshops.component.html',
  styleUrls: ['./retailshops.component.css']
})
export class RetailshopsComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })
  msg:String="";
  t1:boolean=true;
  t2:boolean=false;
  t3:boolean=false;
  t4:boolean=false;
  t5:boolean=false;
  t6:boolean=false;
  out_order:Array<retrive_order>=[];
  out_order4:Array<retrive_order>=[];
  out_order5:Array<new_user_datatype>=[];
  
  constructor(public nser:CustomerService) { }

  ngOnInit(): void {
  }
  checkUser() {
    let login = this.loginRef.value;
    if(login.user=="Retail" && login.pass=="r01"){
      this.msg = "Successfully login";
      this.t1=false;
      this.t2=true;
      
    }else {
        this.msg = "Failure try once again";
    }
    this.loginRef.reset();
  }

  retail_connection(){
    this.t3=true;
    this.t4=false;
    this.t5=false;
    this.t6=false;
    this.nser.getorder_created().subscribe(result=>this.out_order=result);
  }
  transfer_tech(element:retrive_order){
    let take_de:status_require={
      _id:element._id,
      status:"technician"
    }
    this.nser.updateorder_status(take_de).subscribe(result=>this.msg=result,error=>console.log(error),()=>this.retail_connection());
  }
  retail_check_order(){
    this.t3=false;
    this.t4=true;
    this.t5=false;
    this.t6=false;
    this.nser.getorder_all().subscribe(result=>this.out_order4=result,error=>console.log(error));
  }
  retail_customer_detail(){
    this.t3=false;
    this.t4=false;
    this.t5=true;
    this.t6=false;
    this.nser.findall().subscribe(result=>this.out_order5=result);
  }
  retail_plan(){
    this.t3=false;
    this.t4=false;
    this.t5=false;
    this.t6=true;
  }
  logout(){
    this.t1=true;
    this.t2=false;
    this.t3=false;
    this.t4=false;
    this.t5=false;
    this.t6=false;
    this.msg="Successfully Logout";
  }
}
