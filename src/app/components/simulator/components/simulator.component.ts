import { Component, OnInit } from '@angular/core';
import { Plazos } from '../../../interfaces/plazos';
import { SimulationService } from '../../../services/simulation/simulation.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],
  providers: [],
})
export class SimulatorComponent implements OnInit {
  checkoutForm: any;


  public plazos: Plazos[];
  imgHorizonteLogo = 'assets/img/horizonte.png';
  txtInvestment = 'Inversión: ';
  txtDelivery = 'Entrega: ';
  txtInsurance = 'Seguro: ';
  txtAval = 'Aval: ';
  txtDisburse = 'Su desembolso es: ';
  investment = '';
  delivery ='';
  insurance = '';
  aval = '';
  disburse = '';

  constructor(
    private formBuilder: FormBuilder,
    private simulation: SimulationService,

  ) {

    this.checkoutForm = this.formBuilder.group({
      payment: '',
      paymentFrequency: '',
    });
  }

  ngOnInit(): void {}

  calculo(data: any): void {
    if (data.payment > 1250000 || data.paymentFrequency > 96) {
      alert('Los valores digitados no son validos');
    } else {
      this.simulation.getSimulation(data).subscribe((res) => {
        console.log(res);
        this.investment = res.investment;
        this.delivery = res.delivery;
        this.insurance = res.insurance;
        this.aval = res.aval;
        this.disburse = res.disburse;
      });
    }

  }

}
