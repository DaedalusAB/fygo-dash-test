import { Component, OnInit } from '@angular/core';
import { TransactionApiService } from 'src/app/fygo-core/services/transaction-api.service';

@Component({
  selector: 'fygo-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  public transactions: any[] = []; //  TODO maybe use NgRx, should be fun :)
  private lastPage: any;

  constructor(
    private transactionApiService: TransactionApiService,
  ) { }

  ngOnInit(): void {
    this.transactionApiService.getFirstPage().subscribe(
      (page: any) => this.loadPage(page)
    );
  }

  public onScroll(): void {
    if(!this.lastPage || !this.lastPage.next) {
      return;
    }
    
    console.log("[!] Next page would be loaded if it existed :)")
    this.loadNextPage();
  }

  private loadPage(page: any): void {
    this.lastPage = page;
    this.transactions.push(...page.results);
  }

  private loadNextPage(): void {
    this.transactionApiService.getAPage(this.lastPage.next).subscribe(
      (page: any) => this.loadPage(page)
    );
  }
}
