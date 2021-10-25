import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsPage } from 'src/app/fygo-shared/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getFirstPage(): Observable<TransactionsPage> {
    const url = `https://october-11.herokuapp.com/api/v1/transactions/?page=1`;    
    return this.httpClient.get<any>(url);
  }
  
  public getAPage(uri: string): Observable<TransactionsPage> {    
    return this.httpClient.get<any>(uri);
  }
}
