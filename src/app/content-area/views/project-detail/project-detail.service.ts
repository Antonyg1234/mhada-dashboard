import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'Bearer'
  })
};

export interface ProjectDetail{

}

@Injectable()
export class ProjectDetailService {
  
  url = environment.apiUrl+'/api/projects';

  constructor(private http: HttpClient) {
    
  }

  /** GET heroes from the server */
  getList (board_id): Observable<ProjectDetail[]> {
    return this.http.get<ProjectDetail[]>(this.url+'/'+board_id)
      .pipe();
  }



  /** PUT: update the hero on the server. Returns the updated hero upon success. */

}


