import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertypes',
  templateUrl: './usertypes.component.html',
  styleUrls: ['./usertypes.component.css']
})
export class UsertypesComponent implements OnInit {
  f0:boolean=true;
  f1:boolean=false;
  f2:boolean=false;
  f3:boolean=false;
  f4:boolean=false;
  f5:boolean=false;

  admin_login():void {
    this.f0=false;
    this.f1=true;
    console.log(this.f1);
  }
  accounts_login():void {
    this.f0=false;
    this.f2=true;
    console.log(this.f2);
  }
  technical_login():void {
    this.f0=false;
    this.f3=true;
    console.log(this.f3);
  }
  retailshops_login():void { 
    this.f0=false;
    this.f4=true;
    console.log(this.f4);
  }
  customer_login():void {
    this.f0=false;
    this.f5=true;
    console.log(this.f5);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
