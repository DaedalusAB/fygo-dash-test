import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Merchant, MerchantsPage } from 'src/app/fygo-shared/models/merchant.model';
import { MerchantApiService } from '../../fygo-core/services/merchant-api.service';

@Injectable()
export class MerchantResolver implements Resolve<Merchant> {
    constructor(
        private merchantApiService: MerchantApiService
    ) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Merchant> {
        const merchantId = route.params.merchantId;
        return this.merchantApiService.getMerchant(merchantId);
    }
}