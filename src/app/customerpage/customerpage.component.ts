import { Component, OnInit } from '@angular/core';
import { connections, connectionsamount, Newcustomer, new_user_datatype, place_order_datatype, retrive_order } from '../newcustomer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})

 

    export class CustomerpageComponent implements OnInit {
      sumamount:number=0;
      rep:Array<connections>=[];
      rep1:Array<connectionsamount>=[];
      rep2:connectionsamount={
        _id:0,
        no_of_connection:0,
        amount:0
      }

        constructor(public kser:CustomerService) {

        }
       
    ngOnInit(): void {
      console.log("Page working");
      this.current_user=this.kser.get_userid_session();
      this.current_pass=this.kser.get_userpass_session();
    }
    current_user:string="";
    current_pass:string="";
    _id:number=0;
    name:string="";
    username:string="";
    password:string="";
    age:number=0;
    phone_no:Number=0;
    city:string="";
    pincode:number=0;
    msg:string="";
    updateMsg:string="";
    WorkingMsg:string="";
    k1:boolean=true;
    k2:boolean=false;
    k3:boolean=false;
    k4:boolean=false;
    k5:boolean=false;
    k6:boolean=false;
    k9:boolean=false;
    out_order:Array<retrive_order>=[];
    out_order1:retrive_order={
      _id:0,
      date:"",
      Connectionrequired:"",
      chooseplan:"",
      status:""
  }
  user_detail_current:Array<new_user_datatype>=[];


    place_orders_input=new FormGroup({
      _id:new FormControl(),
      date:new FormControl(),
      Connectionrequired:new FormControl(),
      chooseplan:new FormControl()
    }) 

    placeordersinput(){
      let value_get=this.place_orders_input.value;
      let order_place={
        _id: value_get._id,
        _user:this.current_user,
        date:value_get.date,
        Connectionrequired:value_get.Connectionrequired,
        chooseplan:value_get.chooseplan,
        status:"Created"
      }
      this.kser.addorder(order_place).subscribe(result=>(this.msg=result));
      console.log(order_place);
      this.place_orders_input.reset();

}   

    place_order(){
      this.k2=true;
      this.k3=false;
      this.k4=false;
      this.k5=false;
      this.k6=false;
      this.k9=false;
    }
    last_order_status(){
      this.k2=false;
      this.k3=true;
      this.k4=false;
      this.k5=false;
      this.k6=false;
      this.k9=false;
      this.kser.vieworderbyuser(this.current_user).subscribe(result=>{this.out_order=result});
    }
    update_profile(){
      this.k2=false;
      this.k3=false;
      this.k4=true;
      this.k5=false;
      this.k6=false;
      this.k9=false;
      this.kser.getuserdetail(this.current_user).subscribe(result=>this.user_detail_current=result,error=>console.log(error),()=>this.datasend());
    }
    datasend(){
      console.log(this.user_detail_current);
      this._id=this.user_detail_current[0]._id;
      this.age=this.user_detail_current[0]._age;
      this.city=this.user_detail_current[0]._city;
      this.name=this.user_detail_current[0]._name;
      this.password=this.user_detail_current[0]._password;
      this.phone_no=this.user_detail_current[0]._phoneno;
      this.pincode=this.user_detail_current[0]._pincode;
      this.username=this.user_detail_current[0]._username;
    }
    my_orders(){
      this.k2=false;
      this.k3=false;
      this.k4=false;
      this.k5=true;
      this.k6=false;
      this.k9=false;
      this.kser.vieworderbyuser(this.current_user).subscribe(result=>this.out_order=result);
    }
    bill_details(){
      this.k2=false;
      this.k3=false;
      this.k4=false;
      this.k5=false;
      this.k6=true;
      this.k9=false;
      this.Viewsconnectionref();
    }
    logout(){
      this.k1=false;
      this.k2=false;
      this.k3=false;
      this.k4=false;
      this.k5=false;
      this.k6=false;
      this.k9=true;
    }
    Viewsconnectionref(){
      let val5= this.current_user;
      this.kser.viewconnections(val5).subscribe(result=>this.rep=result,error=>console.log(error),()=>this.calculation());
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
    updatecustomerFromDb(){
      let Customerdata:Newcustomer = { 
        _id:this._id,
        name:this.name,
        username:this.username,
        password:this.password,
        age:this.age,
        phone_no:this.phone_no,
        city:this.city,
        pincode:this.pincode,
          }
        let updateddetail:new_user_datatype={
          _id:Customerdata._id,
          _name:Customerdata.name,
          _username:Customerdata.username,
          _password:Customerdata.password,
          _age:Customerdata.age,
          _phoneno:Customerdata.phone_no,
          _city:Customerdata.city,
          _pincode:Customerdata.pincode
          }
          this.kser.update_userdata(updateddetail).subscribe(result=>this.msg=result);
        }
        
    }