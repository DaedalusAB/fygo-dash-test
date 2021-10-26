import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { MerchantItemComponent } from './merchant-item/merchant-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { FygoSharedModule } from '../fygo-shared/fygo-shared.module';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';

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
        component: MerchantListComponent
      },
      {
        path: 'transactions',
        component: TransactionsListComponent
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InfiniteScrollModule,
    FygoSharedModule,
  ],
})
export class FygoDashboardModule { }
