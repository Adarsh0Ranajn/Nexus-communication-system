import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RetailDatatype } from '../retail-datatype';
import { RetailService } from '../retail.service';

@Component({
  selector: 'app-admin-retail-showroom',
  templateUrl: './admin-retail-showroom.component.html',
  styleUrls: ['./admin-retail-showroom.component.css']
})
export class AdminRetailShowroomComponent implements OnInit {
   adminretailref = new FormGroup({
    _id:new FormControl(),
    adminretail_name:new FormControl(),
    adminretail_city:new FormControl(),
    adminretail_phone:new FormControl()
  });
  msg:string="";
  ven_arr:Array<RetailDatatype>=[];
  flag:boolean=false;
  Venname:string="";
  Vencity:String="";
  Venphone:Number=0;
  Venid:number=0;
  updateMsg:String="";
  deleteMsg:String="";


  constructor(public rser:RetailService) { }

  ngOnInit( ): void {
    this.retriveall();
  }
  adminretaildata():void{
    let login = this.adminretailref.value;
    console.log(login);
    this.rser.storeretail(login).subscribe(result=>this.msg=result.msg,
      error=>console.log(error),()=>this.retriveall());
    this.adminretailref.reset();
  }
  retriveall(): void { 
    this.rser.findall().subscribe(result=>{this.ven_arr=result;console.log(result)},error=>console.log(error));
  }
  updateven(ven_input:RetailDatatype){
    //console.log(product);
    this.flag=true;
    this.Venid=ven_input._id;
    this.Venname=ven_input.adminretail_name;
    this.Vencity=ven_input.adminretail_city;
    this.Venphone=ven_input.adminretail_phone;

  }
  updateVenFromDb(){
    let Vendata = { _id:this.Venid,
      adminretail_name:this.Venname,
      adminretail_city:this.Vencity,
      adminretail_phone:this.Venphone,};
    this.rser.updateretail(Vendata).subscribe(result=>this.updateMsg=result,error=>console.log(error),()=>this.retriveall());
    this.flag=false;
  }
  deleteven(vid:number): void {
    // console.log(pid);
    let result = confirm("Do you want to delete the records?");
    if(result){
     this.rser.deleteretail(vid).subscribe(result=>this.deleteMsg=result,error=>console.log(error),()=>this.retriveall());
    }else {
      alert("Record didn't delete");
    }
  }
  
}
