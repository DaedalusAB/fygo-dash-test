import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './fygo-core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./fygo-login/fygo-login.module').then(m => m.FygoLoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./fygo-dashboard/fygo-dashboard.module').then(m => m.FygoDashboardModule),
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
