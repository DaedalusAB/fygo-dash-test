import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/fygo-shared/models/transaction.model';

@Component({
  selector: 'fygo-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent  {
  @Input() transaction: Transaction;

  constructor() { }


  public get createdDate(): Date {
    return new Date(this.transaction.created);
  }
}
