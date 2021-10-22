import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MerchantsPage } from 'src/app/fygo-shared/models/merchant.model';

@Injectable({
  providedIn: 'root'
})
export class MerchantApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAPageOfMerchants(page: number = 1): Observable<MerchantsPage> {
    //  TODO I think the demo BE only has a single page with 5 merchants; I'll go ahead with this assumption for now :shrug:
    const url = `https://october-11.herokuapp.com/api/v1/merchants/`;
    const params = new HttpParams().set('page', page.toString());
    
    return this.httpClient.get<MerchantsPage>(url, { params });
  }
}
