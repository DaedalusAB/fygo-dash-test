import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/fygo-shared/models/transaction.model';

@Component({
  selector: 'fygo-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent {
  @Input() transaction: Transaction;

  constructor(
    private router: Router,
  ) { }


  public get createdDate(): Date {
    return new Date(this.transaction.created);
  }

  public openMerchant(): void {
    if(+this.transaction.amount > 0)
    this.router.navigate(['dashboard', 'merchant', this.transaction.merchant_id]);
  }
}
