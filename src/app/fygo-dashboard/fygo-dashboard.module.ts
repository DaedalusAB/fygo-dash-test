import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { MerchantItemComponent } from './components/merchant-item/merchant-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FygoSharedModule } from '../fygo-shared/fygo-shared.module';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { MerchantListComponent } from './components/merchant-list/merchant-list.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { MerchantsResolver } from './resolvers/merchants.resolver';
import { TransactionsResolver } from './resolvers/transactions.resolver';
import { MerchantComponent } from './components/merchant/merchant.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [     
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'merchants'
      },
      {
        path: 'merchants',
        component: MerchantListComponent,
        resolve: { merchantsFirstPage: MerchantsResolver }
      },
      {
        path: 'transactions',
        component: TransactionsListComponent,
        resolve: { transactionsFirstPage: TransactionsResolver }
      },
      {
        path: 'merchant/:merchantId',
        component: MerchantComponent,
        //  TODO resolve
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    MerchantListComponent,
    MerchantItemComponent,
    TransactionsListComponent,
    TransactionItemComponent,
    MerchantComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InfiniteScrollModule,
    FygoSharedModule,
  ],
  providers: [
    MerchantsResolver,
    TransactionsResolver,
  ]
})
export class FygoDashboardModule { }
