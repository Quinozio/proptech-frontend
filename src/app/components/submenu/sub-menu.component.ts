import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface SubMenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="sub-menu">
      @for (item of menuItems; track item.label) {
        <a [routerLink]="item.route" routerLinkActive="active">{{ item.label }}</a>
      }
    </div>
  `,
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent {
  @Input() menuItems: SubMenuItem[] = [];
}
