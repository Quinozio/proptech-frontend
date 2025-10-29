import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navigationItems = [
    { icon: 'home', label: 'Pagina iniziale', route: '/' },
    { icon: 'account_balance_wallet', label: 'Saldi', route: '/saldi' },
    { icon: 'swap_horiz', label: 'Transazioni', route: '/transazioni' },
    { icon: 'list_alt', label: 'Lista', route: '/lista' },
    { icon: 'people', label: 'Clienti', route: '/clienti' },
    { icon: 'category', label: 'Catalogo prodotti', route: '/prodotti' },
  ];

  quickLinks = [
    { icon: 'schedule', label: 'Sigma', route: '/sigma' },
    { icon: 'article', label: 'Report', route: '/report' },
  ];

  productsMenu = [
    { icon: 'payment', label: 'Payments', route: '/payments' },
    { icon: 'receipt_long', label: 'Billing', route: '/billing' },
    { icon: 'bar_chart', label: 'Reportistica', route: '/reportistica' },
  ];

  otherMenu = [
    { icon: 'more_horiz', label: 'Altro', route: '/altro' },
  ];

}
