import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {StockserService} from '../stockser.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-admin-stock',
  templateUrl: './admin-stock.component.html',
  styleUrls: ['./admin-stock.component.css']
})
export class AdminStockComponent implements OnInit {

 stockref=new FormGroup({
  _id:new  FormControl(),
  vendor_name:new  FormControl(),
  invoice_no:new  FormControl(),
  date:new  FormControl(),
  item_name:new  FormControl(),
  item_unit_price:new  FormControl(),
  quantity:new  FormControl(),
  amount:new  FormControl()
 });

 sen_arr:Array<Stock>=[];
 msg:any="";  
 flag:boolean=false;
 sl_id:number=0;
 s_venname:string="";
 s_invoice:number=0;
 s_date:string="";
 s_itemname:string=""
 s_item_unit_price:number=0;
 s_quantity:number=0;
 s_amount:number=0;
 updateMsg:string="";
 deleteMsg:string="";
 WorkingMsg:string="";
  
  constructor(public sser:StockserService) { }

  ngOnInit(): void {
    
  }

stockdata(){
let login=this.stockref.value;
this.sser.addstock(login).subscribe(result=>this.msg=result,
  error=>console.log(error));
this.stockref.reset();
}

}
