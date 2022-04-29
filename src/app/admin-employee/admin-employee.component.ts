import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit {

  dataref = new FormGroup({
    _id:new FormControl(),
    emp_name:new FormControl(),
    emp_age:new FormControl(),
    emp_salary:new FormControl(),
    emp_experience:new FormControl()
  });

  emp_arr:Array<Employee>=[];
  msg:any="";  
  flag:boolean=false;
  Empage:number=0;
  Empexperience:number=0;
  Empsalary:number=0;
  updateMsg:string="";
  Empid:number=0;
  Empname:string="";
  deleteMsg:string="";
  WorkingMsg:string="";
  

  constructor(public pser:EmployeeService) { }
  ngOnInit(): void {
    this.retriveall();
  }

  empdata():void{
    let login = this.dataref.value;
    this.pser.storeemployee(login).subscribe(result=>this.msg=result.msg,
      error=>console.log(error),()=>this.retriveall());
    this.dataref.reset();
   
  }

  retriveall(): void { 
    this.WorkingMsg="Working";
    this.pser.findall().subscribe(result=>{this.emp_arr=result;console.log(result)},error=>console.log(error));
  }
  
  updateemp(emp_input:Employee){
    //console.log(product);
    this.flag=true;
    this.Empid=emp_input._id;
    this.Empname=emp_input.emp_name;
    this.Empage=emp_input.emp_age;
    this.Empsalary=emp_input.emp_salary;
    this.Empexperience=emp_input.emp_experience;
  }
  updateEmpFromDb(){
    let Empdata = { _id:this.Empid,
      emp_name:this.Empname,
      emp_age:this.Empage,
      emp_salary:this.Empsalary,
      emp_experience:this.Empexperience};
    this.pser.updateemployee(Empdata).subscribe(result=>this.updateMsg=result,error=>console.log(error),()=>this.retriveall());
    this.flag=false;
  }

  deleteemp(eid:number): void {
    // console.log(pid);
    let result = confirm("Do you want to delete the records?");
    if(result){
     this.pser.deleteemployee(eid).subscribe(result=>this.deleteMsg=result,error=>console.log(error),()=>this.retriveall());
    }else {
      alert("Record didn't delete");
    }
    
   }


}
 
