import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { connections, connectionsamount } from '../newcustomer';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })
  msg:string=""; 
  a1:boolean=true;
  a2:boolean=false;
  a3:boolean=false;
  a4:boolean=false;
  a5:boolean=false;
  a6:boolean=false;
  current_user:string="";
  sumamount:number=0;
  rep:Array<connections>=[];
  rep1:Array<connectionsamount>=[];
  rep2:connectionsamount={
    _id:0,
    no_of_connection:0,
    amount:0
  }
  constructor(public nser:CustomerService) { }

  ngOnInit(): void {
  }
  ViewwconnectionRef= new FormGroup({
    v_name:new FormControl()
  })
  Viewsconnectionref(){
    this.rep1=[];
    let val5=this.ViewwconnectionRef.value;
    this.nser.viewconnections(val5.v_name).subscribe(result=>this.rep=result,error=>console.log(error),()=>this.calculation());
    //this.nser.viewconnections(val5.v_name).subscribe(result=>console.log(result));
  }
  calculation(){
    this.rep.forEach(element => {
      let amount=eval(element._id)*element.no_of_connection;
      this.sumamount=this.sumamount+amount;
      this.rep2={
        _id:eval(element._id),
        no_of_connection:element.no_of_connection,
        amount:amount
      }
      this.rep1.push(this.rep2);
    }
    );
  }
  checkUser() {
    let login = this.loginRef.value;
    if(login.user=="Account" && login.pass=="a01"){
      this.msg = "Successfully login";
      this.a1=false;
      this.a2=true;
    }else {
        this.msg = "Failure try once again";
    }
    this.loginRef.reset();
    
  }
  calculate_bill(){
    this.a3=true;
  }
  maintain_bill(){
    this.a2=false;
    this.a4=true;
  }
  update_bill(){
    this.a2=false;
    this.a5=true;
  }
  calculate_plancharges(){
    this.a2=false;
    this.a6=true;
  }
  logout(){
this.a3=false;
this.a1=true;
this.a2=false;
this.msg="Successfully Logout";
  }
  
}
