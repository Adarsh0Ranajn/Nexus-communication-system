export interface Newcustomer {
    _id:number,
    name:string,
    username:string,
    password:string,
    age:number,
    phone_no:Number,
    city:string,
    pincode:number
}

export interface place_order_datatype{
      _id:number,
      _user:string,
      date:string,
      Connectionrequired:string,
      chooseplan:string,
      status:string
}


export interface new_user_datatype{
    _id:number,
    _name:string,
    _username:string,
    _password:string,
    _age:number,
    _phoneno:Number,
    _city:string,
    _pincode:number
}
export interface status_require{
    _id:number,
    status:string
}
export interface connections{
    _id:string,
    no_of_connection:number
}
export interface connectionsamount{
    _id:number,
    no_of_connection:number,
    amount:number
}

export interface retrive_order {
    _id:number,
    date:string,
    Connectionrequired:string,
    chooseplan:string,
    status:string
}

