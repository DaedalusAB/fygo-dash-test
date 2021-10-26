import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchantApiService } from 'src/app/fygo-core/services/merchant-api.service';
import { Merchant, MerchantsPage } from 'src/app/fygo-shared/models/merchant.model';

@Component({
  selector: 'fygo-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss']
})
export class MerchantListComponent implements OnInit {
  public merchants: Merchant[] = [];
  private lastPage: MerchantsPage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private merchantApiService: MerchantApiService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.loadPage(data.merchantsFirstPage));
  }

  public onScroll(): void {
    if (!this.lastPage || !this.lastPage.next) {
      return;
    }

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
