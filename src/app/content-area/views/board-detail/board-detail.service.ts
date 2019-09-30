import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export interface BoardDetail{

}

@Injectable()
export class BoardDetailService {
  
  url = 'http://localhost/master-dashboard-mhada/public/index.php/api/boards'

  constructor(private http: HttpClient) {
    
  }

  /** GET heroes from the server */
  getList (): Observable<BoardDetail[]> {
    return this.http.get<BoardDetail[]>(this.url)
      .pipe();
  }



  /** PUT: update the hero on the server. Returns the updated hero upon success. */

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/