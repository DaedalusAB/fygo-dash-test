import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderOverlayComponent } from './loader-overlay/loader-overlay.component';
import { FygoHeaderComponent } from './fygo-header/fygo-header.component';



@NgModule({
  declarations: [
    LoaderOverlayComponent,
    FygoHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderOverlayComponent,
    FygoHeaderComponent,
  ]
})
export class FygoSharedModule { }
