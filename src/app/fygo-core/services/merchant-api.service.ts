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

  //  I think the demo BE only has a single page with 5 merchants and no other page - which is OK; but..
  //  It was unclear to me what would exactly be in the fields next/previous in case there was more than a single page
  //  I'll assume the fields would contain the URL at which the next/previous page can be fetched
  //  ie. if there were 2 pages, the 1st page.next = `https://october-11.herokuapp.com/api/v1/merchants/?page=2`
  //  I'll be happy to refactor this code if my assumption is wrong :)

  public getFirstPage(): Observable<MerchantsPage> {
    const url = `https://october-11.herokuapp.com/api/v1/merchants/?page=1`;    
    return this.httpClient.get<MerchantsPage>(url);
  }
  
  public getAPage(uri: string): Observable<MerchantsPage> {    
    return this.httpClient.get<MerchantsPage>(uri);
  }
}
