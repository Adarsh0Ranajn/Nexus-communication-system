import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })
  k1:boolean=true;
  k2:boolean=false;
  e1:boolean=false;
  e2:boolean=false;
  e3:boolean=false;
  e4:boolean=false;
  e5:boolean=false;
  e6:boolean=false;
  s2:boolean=false;
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser() {
    let login = this.loginRef.value;
    if(login.user=="Admin" && login.pass=="admin"){
      this.msg = "Successfully login";
      this.k1=false;
      this.k2=true;
    }else {
        this.msg = "Failure try once again";
    }
    this.loginRef.reset();
  }
  admin_employee(){
   // this.k2=false;
    this.e1=true;
    this.e2=false;
    this.s2=false;
    this.e4=false;
    this.e3=false;
    this.e5=false;
    this.e6=false;
  }  
 admin_vendor(){
   //this.k2=false;
   this.e2=true;
   this.s2=false;
    this.e4=false;
    this.e1=false;
    this.e3=false;
    this.e5=false;
    this.e6=false;
 } 
 admin_stock(){
  //this.k2=false;
  this.s2=true;
  this.e4=false;
  this.e1=false;
  this.e2=false;
 }
 stock_add(){
  this.e3=true;
  this.e5=false;
  this.e6=false;
 }
 view_stock_vendor(){
  this.e5=true;
  this.e3=false;
  this.e6=false;
 }
 view_stock_item(){
  this.e6=true;
  this.e5=false;
  this.e3=false;
 }
 admin_retail_showroom(){
  // this.k2=false;
   this.e4=true;
   this.e1=false;
  this.e2=false;
  this.s2=false;
  this.e3=false;
  this.e5=false;
  this.e6=false;
 }
 logout(){
  this.k1=true;
  this.k2=false;
  this.e2=false;
  this.s2=false;
  this.e4=false;
  this.e3=false;
  this.e5=false;
  this.e6=false;
  this.e1=false;
  this.msg="Successfully Logout";
 }
}
