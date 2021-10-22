import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./fygo-login/fygo-login.module').then(m => m.FygoLoginModule)
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadChildren: () => import('./fygo-dashboard/fygo-dashboard.module').then(m => m.FygoDashboardModule)
  }
];
//  TODO route guards [for other routes]!!


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
