import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  private URI = 'http://localhost:5000/rates';

  constructor( private http: HttpClient ) { }



  getRates():  Observable<any>{
    return this.http.get(this.URI);
  }

}
