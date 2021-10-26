import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

enum ActiveDashboardTab {
  Merchants,
  Transactions
}

@Component({
  selector: 'fygo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public activeTab: ActiveDashboardTab = ActiveDashboardTab.Merchants;
  public ActiveDashboardTab = ActiveDashboardTab;

  constructor(
    private router: Router
  ) { }

  public goToMerchants(): void {
    if (this.activeTab === ActiveDashboardTab.Merchants) {
      return;
    }

    this.activeTab = ActiveDashboardTab.Merchants;
    this.router.navigate(['dashboard', 'merchants']);
  }

  public goToTransactions(): void {
    if (this.activeTab === ActiveDashboardTab.Transactions) {
      return;
    }

    this.activeTab = ActiveDashboardTab.Transactions;
    this.router.navigate(['dashboard', 'transactions']);
  }
}
