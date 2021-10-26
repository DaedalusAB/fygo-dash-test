import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionApiService } from 'src/app/fygo-core/services/transaction-api.service';
import { Transaction, TransactionsPage } from 'src/app/fygo-shared/models/transaction.model';

@Component({
  selector: 'fygo-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  public transactions: Transaction[] = [];
  private lastPage: TransactionsPage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private transactionApiService: TransactionApiService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.loadPage(data.transactionsFirstPage));
  }

  public onScroll(): void {
    if (!this.lastPage || !this.lastPage.next) {
      return;
    }

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
