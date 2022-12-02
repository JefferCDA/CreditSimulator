import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorComponent } from './components/simulator.component'
import { SharedModule} from '../../shared/shared.module'

import { SimulatorRoutingModule } from './simulator-routing.module';
import { ManagementRatesModule } from "../management-rates/management-rates.module";


@NgModule({
    declarations: [
        SimulatorComponent
    ],
    exports: [
        SimulatorComponent
    ],
    imports: [
        CommonModule,
        SimulatorRoutingModule,
        SharedModule,
        ManagementRatesModule
    ]
})
export class SimulatorModule { }
