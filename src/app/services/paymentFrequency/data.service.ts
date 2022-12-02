import { Injectable } from '@angular/core';
import {Plazos} from '../../interfaces/plazos'

@Injectable()
export class DataService {
  private plazos : Plazos [] = [
    {
      id: 1,
      meses: 1
    },
    {
      id: 2,
      meses: 2
    },
    {
      id: 3,
      meses: 3
    },
    {
      id: 4,
      meses: 4
    },
    {
      id: 5,
      meses: 5
    },
    {
      id: 6,
      meses: 6
    },
  ]
  constructor() { }

  getPlazos(): Plazos[]{
    return this.plazos
  }
}
