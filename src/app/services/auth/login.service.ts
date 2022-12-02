import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URI = 'http://localhost:5000/login';
  constructor(private http: HttpClient) { }

  private accessRate: boolean= false;

  login(body: any): Observable<any> {
    return this.http.post<any>(this.URI,body);
  }
  public getAccess():boolean{
    return this.accessRate
  }
  public setAccess(access: boolean){
    this.accessRate = access
  }

}
