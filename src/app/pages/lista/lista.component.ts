import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SubMenuComponent } from '@proptech/components/submenu/sub-menu.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SubMenuComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  menuItems = [
    { label: 'Prenotazioni', route: 'prenotazioni' },
    { label: 'Arrivi', route: 'arrivi' },
    { label: 'Partenze', route: 'partenze' }
  ];
}
