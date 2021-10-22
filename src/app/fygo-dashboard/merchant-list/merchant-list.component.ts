import { Component, OnInit } from '@angular/core';
import { MerchantApiService } from 'src/app/fygo-core/services/merchant-api.service';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss']
})
export class MerchantListComponent implements OnInit {

  constructor(
    private merchantApiService: MerchantApiService,
  ) { }

  ngOnInit(): void {
    this.merchantApiService.getAPageOfMerchants().subscribe(res => console.log(">> res", res));
  }
}
