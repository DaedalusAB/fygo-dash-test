import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FygoSharedModule } from '../fygo-shared/fygo-shared.module';

const routes : Route[] = [
  {
    path: '',
    component: LoginComponent
  }  
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FygoSharedModule,
  ]
})
export class FygoLoginModule { }
