import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomerListComponent } from './customerList.component';
import { CustomerDetailComponent } from './customerDetail.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})
export default class CustomerModule {}