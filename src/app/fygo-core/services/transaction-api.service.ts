import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MerchantsPage } from 'src/app/fygo-shared/models/merchant.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  //  Same comment as for Merchants

  public getFirstPage(): Observable<any> {
    const url = `https://october-11.herokuapp.com/api/v1/transactions/?page=1`;    
    return this.httpClient.get<any>(url);
  }
  
  public getAPage(uri: string): Observable<any> {    
    return this.httpClient.get<any>(uri);
  }
}
