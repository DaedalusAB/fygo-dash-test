import { Component, OnInit } from '@angular/core';
import { MerchantApiService } from 'src/app/fygo-core/services/merchant-api.service';
import { Merchant, MerchantsPage } from 'src/app/fygo-shared/models/merchant.model';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss']
})
export class MerchantListComponent implements OnInit {
  public merchants: Merchant[] = []; //  TODO maybe use NgRx, should be fun :)
  private lastPage: MerchantsPage;

  constructor(
    private merchantApiService: MerchantApiService,
  ) { }

  ngOnInit(): void {
    this.merchantApiService.getFirstPage().subscribe(
      (page: MerchantsPage) => this.loadPage(page)
    );
  }

  public onScroll(): void {
    if(!this.lastPage || !this.lastPage.next) {
      return;
    }
    
    console.log("[!] Next page would be loaded if it existed :)")
    this.loadNextPage();
  }

  private loadPage(page: MerchantsPage): void {
    this.lastPage = page;
    this.merchants.push(...page.results);
  }

  private loadNextPage(): void {
    this.merchantApiService.getAPage(this.lastPage.next).subscribe(
      (page: MerchantsPage) => this.loadPage(page)
    );
  }
}
