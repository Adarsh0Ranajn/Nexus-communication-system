import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsertypesComponent } from './usertypes/usertypes.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TechnicalComponent } from './technical/technical.component';
import { RetailshopsComponent } from './retailshops/retailshops.component';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminVendorComponent } from './admin-vendor/admin-vendor.component';
import { AdminStockComponent } from './admin-stock/admin-stock.component';
import { AdminRetailShowroomComponent } from './admin-retail-showroom/admin-retail-showroom.component';
import { ViewstockvendorComponent } from './viewstockvendor/viewstockvendor.component';
import { ViewstockitemComponent } from './viewstockitem/viewstockitem.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UsertypesComponent,
    AdminComponent,
    AccountsComponent,
    TechnicalComponent,
    RetailshopsComponent,
    CustomerComponent,
    AdminEmployeeComponent,
    AdminVendorComponent,
    AdminStockComponent,
    AdminRetailShowroomComponent,
    ViewstockvendorComponent,
    ViewstockitemComponent,
    CustomerpageComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
