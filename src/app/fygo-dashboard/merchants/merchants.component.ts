import { Component, OnInit } from '@angular/core';
import { MerchantApiService } from 'src/app/fygo-core/services/merchant-api.service';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {

  constructor(
    private merchantApiService: MerchantApiService,
  ) { }

  ngOnInit(): void {
    this.merchantApiService.getAPageOfMerchants().subscribe(res => console.log(">> res", res));
  }
}
