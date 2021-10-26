import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderOverlayComponent } from './components/loader-overlay/loader-overlay.component';
import { FygoHeaderComponent } from './components/fygo-header/fygo-header.component';
import { FygoFooterComponent } from './components/fygo-footer/fygo-footer.component';



@NgModule({
  declarations: [
    LoaderOverlayComponent,
    FygoHeaderComponent,
    FygoFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderOverlayComponent,
    FygoHeaderComponent,
    FygoFooterComponent
  ]
})
export class FygoSharedModule { }
