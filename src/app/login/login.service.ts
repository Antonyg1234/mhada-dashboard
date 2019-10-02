import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'my-auth-token'
  })
};

export interface LoginFields{

}

@Injectable()
export class LoginService {
  
  url = environment.apiUrl+'/oauth/token';
  
  constructor(private http: HttpClient) {
    
  }


  login(data) {
    data['grant_type'] = environment.grant_type;
    data['client_id'] = environment.client_id;
    data['client_secret'] = environment.client_secret;
    data['scope'] = environment.scope;
    data['username'] = data.email;

    return this.http.post(this.url, data)
  }
 
 

}
