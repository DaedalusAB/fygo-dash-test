import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { MerchantsComponent } from './merchants/merchants.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MerchantsComponent
      },
      {
        path: 'merchants',
        pathMatch: 'full',
        component: MerchantsComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    MerchantsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class FygoDashboardModule { }
