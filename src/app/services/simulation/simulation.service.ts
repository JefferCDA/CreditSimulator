import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private URI = 'http://localhost:5000/creditsimulation';

  constructor(private http: HttpClient) {}

  getSimulation(body: any): Observable<any> {
    return this.http.post<any>(this.URI,body);
  }
}
