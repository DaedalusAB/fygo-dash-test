import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchant } from 'src/app/fygo-shared/models/merchant.model';

@Injectable({
  providedIn: 'root'
})
export class MerchantApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllMerchants(): Observable<Merchant[]> {
    const url = `https://october-11.herokuapp.com/api/v1/merchants/`;
    return this.httpClient.get<Merchant[]>(url);
  }
}
