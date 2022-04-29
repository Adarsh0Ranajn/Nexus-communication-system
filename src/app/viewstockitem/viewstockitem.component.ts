import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import{StockserService} from '../stockser.service';
import { Stock,stock_current } from '../stock';
@Component({
  selector: 'app-viewstockitem',
  templateUrl: './viewstockitem.component.html',
  styleUrls: ['./viewstockitem.component.css']
})
export class ViewstockitemComponent implements OnInit {
    ViewstockitemRef = new FormGroup({
      v_name:new FormControl(),
    });
    msg:string="";
  sen_arr:Array<stock_current>=[];
  constructor(public vsiser:StockserService) { }

  ngOnInit(): void {
    this.Viewstockitemref();
  }
  Viewstockitemref(): void { 
    this.vsiser.viewproductbyitemname().subscribe(result=>{this.sen_arr=result;console.log(result)},error=>console.log(error));
    this.ViewstockitemRef.reset();
  }
} 
