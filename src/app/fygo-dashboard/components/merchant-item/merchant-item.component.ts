import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merchant } from 'src/app/fygo-shared/models/merchant.model';

@Component({
  selector: 'fygo-merchant-item',
  templateUrl: './merchant-item.component.html',
  styleUrls: ['./merchant-item.component.scss']
})
export class MerchantItemComponent {
  @Input() merchant: Merchant;

  constructor(
    private router: Router,
  ) { }

  public openMerchant(): void {
    this.router.navigate(['dashboard', 'merchant', this.merchant.id]);
  }
}
