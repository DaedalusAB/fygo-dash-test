import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { MerchantListComponent } from './merchant-list/merchant-list.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MerchantListComponent
      },
      {
        path: 'merchants',
        pathMatch: 'full',
        component: MerchantListComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    MerchantListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class FygoDashboardModule { }
