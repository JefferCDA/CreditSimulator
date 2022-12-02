import { Component, OnInit } from '@angular/core';
import { RatesService } from '../../../services/rates/rates.service';

@Component({
  selector: 'app-management-rates',
  templateUrl: './management-rates.component.html',
  styleUrls: ['./management-rates.component.scss']
})
export class ManagementRatesComponent implements OnInit {

  constructor(
    private rateService: RatesService,
  ) {

   }

  ngOnInit(): void {
    this.getCurrentRates();
  }

  getCurrentRates(){
    try {
      this.rateService.getRates().subscribe((res) =>{
        console.log(res);
      })
    } catch (error) {
      console.log(error);
    }

  }
}
