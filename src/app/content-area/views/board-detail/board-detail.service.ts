import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'Bearer'
  })
};

export interface BoardDetail{

}

@Injectable()
export class BoardDetailService {
  
  url = 'http://localhost/master-dashboard-mhada/public/index.php/api/boards';

  constructor(private http: HttpClient) {
    
  }

  /** GET heroes from the server */
  getList (): Observable<BoardDetail[]> {
    return this.http.get<BoardDetail[]>(this.url)
      .pipe();
  }



  /** PUT: update the hero on the server. Returns the updated hero upon success. */

}


