import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantsPage } from 'src/app/fygo-shared/models/merchant.model';
import { MerchantApiService } from '../../fygo-core/services/merchant-api.service';

@Injectable()
export class MerchantsResolver implements Resolve<MerchantsPage> {
  constructor(
    private merchantApiService: MerchantApiService
  ) { }

  resolve(): Observable<MerchantsPage> {
    return this.merchantApiService.getFirstPage();
  }
}