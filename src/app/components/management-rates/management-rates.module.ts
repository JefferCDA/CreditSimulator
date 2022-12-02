import { SharedModule } from './../../shared/shared.module';
import { ManagementRatesComponent } from './components/management-rates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRatesRoutingModule } from './management-rates-routing.module';

@NgModule({
  declarations: [ManagementRatesComponent],
  imports: [
    CommonModule,
    ManagementRatesRoutingModule,
    SharedModule
  ],
  exports: [
    ManagementRatesComponent
  ]
})
export class ManagementRatesModule { }
