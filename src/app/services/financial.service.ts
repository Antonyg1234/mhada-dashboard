import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


export interface FinancialDetail{
     budgetType: string;
     amount: string;
     values:{};
}

export interface TotalFinancialDetail{
	budgetType: string;
	amount: string;
	budgetAmount: string;
	values:{};
	budgetDetails:[];
}

@Injectable()
export class FinancialService {
  url = environment.apiUrl+'/api/get_financial_detail';

  constructor(private http: HttpClient) { }

  public getFinancialDetail(finance_param){
    //console.log(finance_param);
    return this.http.post<FinancialDetail[]>(this.url,{"board" : finance_param}).pipe();
  }
}
