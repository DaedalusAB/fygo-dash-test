import { Component } from '@angular/core';

@Component({
  selector: 'fygo-loader-overlay',
  templateUrl: './loader-overlay.component.html',
  styleUrls: ['./loader-overlay.component.scss']
})
export class LoaderOverlayComponent {

  constructor() { }

  public stopClicks(event): void {
    event.stopPropagation();
  }
}
