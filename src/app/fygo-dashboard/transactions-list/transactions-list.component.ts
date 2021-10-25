import { Component, OnInit } from '@angular/core';
import { TransactionApiService } from 'src/app/fygo-core/services/transaction-api.service';
import { Transaction, TransactionsPage } from 'src/app/fygo-shared/models/transaction.model';

@Component({
  selector: 'fygo-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  public transactions: Transaction[] = []; //  TODO maybe use NgRx, should be fun :)
  private lastPage: TransactionsPage;

  constructor(
    private transactionApiService: TransactionApiService,
  ) { }

  ngOnInit(): void {
    this.transactionApiService.getFirstPage().subscribe(
      (page: TransactionsPage) => this.loadPage(page)
    );
  }

  public onScroll(): void {
    if(!this.lastPage || !this.lastPage.next) {
      return;
    }
    
    console.log("[!] Next page would be loaded if it existed :)")
    this.loadNextPage();
  }

  private loadPage(page: TransactionsPage): void {
    this.lastPage = page;
    this.transactions.push(...page.results);
  }

  private loadNextPage(): void {
    this.transactionApiService.getAPage(this.lastPage.next).subscribe(
      (page: TransactionsPage) => this.loadPage(page)
    );
  }
}
