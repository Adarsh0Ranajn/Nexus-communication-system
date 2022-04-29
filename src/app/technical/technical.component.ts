import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { retrive_order, status_require } from '../newcustomer';
import { stock_current, stock_report } from '../stock';
import { StockserService } from '../stockser.service';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
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
  constructor(public nser:CustomerService,public vsiser:StockserService) { }
  out_order:Array<retrive_order>=[];
  out_order2:Array<stock_current>=[];
  out_order4:Array<retrive_order>=[];
   sen_arr:Array<stock_current>=[];
   stock_current1:Array<stock_current>=[];
   rep:Array<stock_report>=[];
   rep1:stock_report={
    _id:"",
    stock_in:0,
    stock_out:0
   }
 
  ngOnInit(): void {
  }
  checkUser() {
    let login = this.loginRef.value;
    if(login.user=="Technical" && login.pass=="t01"){
      this.msg = "Successfully login";
      this.t1=false;
      this.t2=true;
  
    }else {
        this.msg = "Failure try once again";
    }
    this.loginRef.reset();
  }
  provide_connection(){
    this.t2=true;
    this.t3=true;
    this.t4=false;
    this.t5=false;
    this.t6=false;
    this.nser.getorder_technician().subscribe(result=>this.out_order=result);

  }
  retail_connection(){
  this.nser.getorder_technician().subscribe(result=>this.out_order=result);
  }
  update_connection(){
    this.t2=true;
    this.t3=false;
    this.t4=true;
    this.t5=false;
    this.t6=false;
    console.log("Wroking");
    this.nser.getorder_all().subscribe(result=>this.out_order4=result,error=>console.log(error),()=>this.gettingoutput());
  }
  gettingoutput(){
    this.out_order4.forEach(element => {
      console.log(element);
    });
  }
  check_placed_conection(){
    this.t2=true;
    this.t3=false;
    this.t4=false;
    this.t5=false;
    this.t6=true;
    this.nser.getorder_all().subscribe(result=>this.out_order4=result,error=>console.log(error),()=>this.gettingoutput());
  }
  product_details(){
    this.t2=true;
    this.t3=false;
    this.t4=false;
    this.t5=true;
    this.t6=false;
    this.nser.getorder_active().subscribe(result=>this.out_order2=result,error=>console.log(error),()=>this.addproducttotal());
  }
  addproducttotal(){
  this.vsiser.viewproductbyitemname().subscribe(result=>{this.sen_arr=result;console.log(result)},error=>console.log(error),()=>this.counting());
  }
  counting(){
    console.log(this.out_order2);
    console.log(this.sen_arr);
    let i:number=0;
    this.out_order2.forEach(element => {
      for(i=0;i<this.sen_arr.length;i++){
          if(element._id==this.sen_arr[i]._id){
            let a1=this.sen_arr[i].Current_Stock;
            let a2=element.Current_Stock;
            this.rep1={
              _id:element._id,
               stock_in:a1,
                stock_out:a2
            }
            this.rep.push(this.rep1);
          }
      }
    });
  }
  transfer_tech(element:retrive_order){
    let result1=confirm("We have active the user and the service get started.");
    console.log(result1);
    if(result1==false){
      let take_de:status_require={
        _id:element._id,
        status:"Area is not feasible"
      }
      this.nser.updateorder_status(take_de).subscribe(result=>this.msg=result,error=>console.log(error),()=>this.retail_connection());
    }
    if(result1==true){
      let take_de:status_require={
        _id:element._id,
        status:"Active"
      }
      this.nser.updateorder_status(take_de).subscribe(result=>this.msg=result,error=>console.log(error),()=>this.retail_connection());
    }
  }
  update_status(val1:number,new_sta:string){
    console.log(new_sta)
    let newstatus_input={
      _id:val1,
      status:new_sta
    }
    this.nser.updateorder_status(newstatus_input).subscribe(result=>this.msg=result);
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
