import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import {VendorserService} from '../vendorser.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-admin-vendor',
  templateUrl: './admin-vendor.component.html',
  styleUrls: ['./admin-vendor.component.css']
})
export class AdminVendorComponent implements OnInit {
  vendorref = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    city:new FormControl(),
    phone:new FormControl()
  });
  
  ven_arr:Array<Vendor>=[];
  msg:any="";  
  flag:boolean=false;
  Venname:string="";
  Vencity:String="";
  Venphone:Number=0;
  Venid:number=0;
  updateMsg:string="";
  deleteMsg:string="";
  WorkingMsg:string="";

  constructor(public vser:VendorserService) { }

  ngOnInit(): void {
    this.retriveall();
  }
  vendordata():void{
    let login = this.vendorref.value;
    console.log(login);
    this.vser.storevendor(login).subscribe(result=>this.msg=result.msg,
      error=>console.log(error),()=>this.retriveall());
    this.vendorref.reset();
  }

  retriveall(): void { 
    this.WorkingMsg="Working";
    this.vser.findall().subscribe(result=>{this.ven_arr=result;console.log(result)},error=>console.log(error));
  }
  updateven(ven_input:Vendor){
    //console.log(product);
    this.flag=true;
    this.Venid=ven_input._id;
    this.Venname=ven_input.name;
    this.Vencity=ven_input.city;
    this.Venphone=ven_input.phone;

  }
  updateVenFromDb(){
    let Vendata = { _id:this.Venid,
      name:this.Venname,
      city:this.Vencity,
      phone:this.Venphone,};
    this.vser.updatevendor(Vendata).subscribe(result=>this.updateMsg=result,error=>console.log(error),()=>this.retriveall());
    this.flag=false;
  }
  deleteven(vid:number): void {
    // console.log(pid);
    let result = confirm("Do you want to delete the records?");
    if(result){
     this.vser.deletevendor(vid).subscribe(result=>this.deleteMsg=result,error=>console.log(error),()=>this.retriveall());
    }else {
      alert("Record didn't delete");
    }
  }
}
