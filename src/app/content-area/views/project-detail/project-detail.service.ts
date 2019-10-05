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

export interface ModuleDetail{

}

export interface DashboardDetail{
  
}
@Injectable()
export class ProjectDetailService {
  
  url = environment.apiUrl+'/api/projects';
  module_url = environment.apiUrl+'/api/modules';
  dashboard_url = environment.apiUrl+'/api/get_dashboard_detail';

  constructor(private http: HttpClient) {
    
  }

  /** GET heroes from the server */
  getList (board_id): Observable<ProjectDetail[]> {
    return this.http.get<ProjectDetail[]>(this.url+'/'+board_id)
      .pipe();
  }

  getModuleList(project_id): Observable<ModuleDetail[]>{
    return this.http.get<ModuleDetail[]>(this.module_url+'/'+project_id).pipe();
  }

  getDashboardList(dashboard): Observable<DashboardDetail[]>{
    let url=dashboard;
    return this.http.get<DashboardDetail[]>(this.dashboard_url+'/'+url).pipe();
  }


  /** PUT: update the hero on the server. Returns the updated hero upon success. */

}


