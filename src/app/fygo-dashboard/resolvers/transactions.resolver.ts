import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TransactionsPage } from 'src/app/fygo-shared/models/transaction.model';
import { TransactionApiService } from '../../fygo-core/services/transaction-api.service';

@Injectable()
export class TransactionsResolver implements Resolve<TransactionsPage> {
  constructor(
    private transactionApiService: TransactionApiService
  ) { }

  resolve(): Observable<TransactionsPage> {
    return this.transactionApiService.getFirstPage();
  }
}