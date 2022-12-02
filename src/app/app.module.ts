
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SimulatorModule } from './components/simulator/simulator.module';
import { SharedModule } from './shared/shared.module';
import { ManagementRatesModule } from './components/management-rates/management-rates.module';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SimulatorModule,
    ManagementRatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
