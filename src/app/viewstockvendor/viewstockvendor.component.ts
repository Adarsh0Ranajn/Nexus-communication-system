import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import{StockserService} from '../stockser.service';
import { Stock,stock_current } from '../stock';
 

@Component({
  selector: 'app-viewstockvendor',
  templateUrl: './viewstockvendor.component.html',
  styleUrls: ['./viewstockvendor.component.css']
})
export class ViewstockvendorComponent implements OnInit {
  ViewstockvendorRef = new FormGroup({
    v_name:new FormControl(),
  });

  msg:string="";
  sen_arr:Array<stock_current>=[];
constructor(public vsvser:StockserService) { }

  ngOnInit(): void {
  }
  Viewstockvendorref(): void { 
      let login = this.ViewstockvendorRef.value;
      this.vsvser.viewproductbyvendor(login.v_name).subscribe(result=>{this.sen_arr=result;console.log(result)},error=>console.log(error));
      this.ViewstockvendorRef.reset();
    }
  }

