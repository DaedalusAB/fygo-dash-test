import { HttpClient } from '@angular/common/http';
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

  public getFirstPage(): Observable<MerchantsPage> {
    const url = `https://october-11.herokuapp.com/api/v1/merchants/?page=1`;    
    return this.httpClient.get<MerchantsPage>(url);
  }
  
  public getAPage(uri: string): Observable<MerchantsPage> {    
    return this.httpClient.get<MerchantsPage>(uri);
  }
}
