import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { new_user_datatype } from '../newcustomer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  SignRef = new FormGroup({
    _id:new FormControl(),
    _name:new FormControl(),
    _username:new FormControl(),
    _password:new FormControl(),
    _age:new FormControl(),
    _phoneno:new FormControl(),
    _city:new FormControl(),
    _pincode:new FormControl(),
  })
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl(),
  })
  msg:string="";
  login_username:string="";
  login_password:string="";
  cus_det:Array<new_user_datatype>=[];
  c1:boolean=true;
  c2:boolean=false;
  c3:boolean=false;
  flag:number=0;
  constructor(public nser:CustomerService) { }

  ngOnInit(): void {
  }
  checkUser() {
    let login = this.loginRef.value;
    console.log(login);
    this.nser.findall().subscribe(result=>this.cus_det=result,error=>console.log(error),()=>this.valid()); 
   }
   valid(){
    let login = this.loginRef.value;
    for (var product of this.cus_det) {
      if(product._username==login.user && product._password==login.pass){
        this.c1=false;
        this.c3=true;
        this.login_username=login.user;
        this.login_password=login.pass;
        this.nser.take_user_session(this.login_username,this.login_password);
        this.flag=1;
        break;
      }
      }
      if(this.flag==0){
        this.c3=false;
        this.c1=true;
        this.msg="Kindly enter correct ID and Password";
      }
      
   }
  signuser(){
 this.c1=false;
 this.c2=true;
  }
  signup(){
    this.c2=false;
    this.c1=true;
    let new_cus=this.SignRef.value;
    this.nser.addcustomer(new_cus).subscribe(result=>this.msg=result);
     }

}
