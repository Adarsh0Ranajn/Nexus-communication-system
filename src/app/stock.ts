export interface Stock {
    _id:Number,
    vendor_name:string,
    invoice_no:Number,
    date:String,
    item_name:String,
    item_unit_price:Number,
    quantity:Number,
    amount:Number

}

export interface stock_current{
    _id:String,
    Current_Stock:Number
}

export interface stock_report{
    _id:String,
    stock_in:Number,
    stock_out:Number
}
