import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderOverlayComponent } from './loader-overlay/loader-overlay.component';



@NgModule({
  declarations: [
    LoaderOverlayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderOverlayComponent
  ]
})
export class FygoSharedModule { }
