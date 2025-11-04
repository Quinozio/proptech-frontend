import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SidebarMenuComponent } from "@proptech/components/ui/sidebar-menu/sidebar-menu.component";
import { Router } from "@angular/router"; // Import Router
import { Component } from "@angular/core";

interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterModule, SidebarMenuComponent],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent {
  navigationItems: MenuItem[] = [
    { icon: "dashboard", label: "Pagina iniziale", route: "/dashboard" },
    {
      icon: "calendar_month",
      label: "Calendario",
      route: "/calendario",
    },
    {
      icon: "sell",
      label: "Prezzi",
      children: [
        {
          icon: "home_work",
          label: "Prezzi appartamenti",
          route: "/prezzi/prezzi-appartamenti",
        },
        {
          icon: "person",
          label: "Prezzi proprietari",
          route: "/prezzi/prezzi-proprietari",
        },
        {
          icon: "beach_access",
          label: "Prezzi spiaggia",
          route: "/prezzi/prezzi-spiaggia",
        },
      ],
    },
    { icon: "people", label: "Clienti", route: "/clienti" },
    { icon: "people", label: "Utenti", route: "/users" },
    {
      icon: "emoji_people",
      label: "Proprietari",
      route: "/proprietari",
    },
  ];

  appartamentiSection: MenuItem[] = [
    { icon: "apartment", label: "Residence", route: "/residence" },
    {
      icon: "holiday_village",
      label: "Appartamenti",
      route: "/appartamenti",
    },
  ];

  listeSection: MenuItem = {
    icon: "table_view",
    label: "Liste",
    children: [
      {
        icon: "assignment",
        label: "Prenotazioni",
        route: "/lista/prenotazioni",
      },
      { icon: "login", label: "Arrivi", route: "/lista/arrivi" },
      { icon: "logout", label: "Partenze", route: "/lista/partenze" },
      {
        icon: "receipt",
        label: "FatturePA",
        route: "/lista/fatturePA",
      },
      {
        icon: "payments",
        label: "Stato Pagamenti",
        route: "/lista/stato-pagamenti",
      },
      {
        icon: "groups",
        label: "Alloggiati",
        route: "/lista/alloggiati",
      },
      { icon: "cached", label: "Cambi", route: "/lista/cambi" },
      {
        icon: "build",
        label: "Cambi dei servizi",
        route: "/lista/cambi-servizi",
      },
      {
        icon: "euro",
        label: "Tassa soggiorno",
        route: "/lista/tassa-soggiorno",
      },
      {
        icon: "request_quote",
        label: "Fattura b",
        route: "/lista/fattura-b",
      },
      {
        icon: "receipt_long",
        label: "Fatture c",
        route: "/lista/fatture-c",
      },
      { icon: "hotel", label: "Sfitti", route: "/lista/sfitti" },
    ],
  };

  constructor(private router: Router) {}

  onMenuItemClicked(item: MenuItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}
