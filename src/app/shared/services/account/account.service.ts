import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/enviroment.prod';
import { Observable } from 'rxjs';
import { ILogin } from '../../interface/login/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = environment.BACKEND_URL;
  private api = {auth: `${this.url}/auth`}

  constructor(private http: HttpClient) { }

  login(credential: ILogin): Observable<any>{
    return this.http.get(`${this.api.auth}?email=${credential.email}&password=${credential.password}`);
  }
}
