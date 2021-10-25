import { Component, Input } from '@angular/core';

@Component({
  selector: 'fygo-header',
  templateUrl: './fygo-header.component.html',
  styleUrls: ['./fygo-header.component.scss']
})
export class FygoHeaderComponent {
  @Input() title: string;

  constructor() { }
}
