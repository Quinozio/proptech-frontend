import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  @Input() items: MenuItem[] = [];
  @Output() itemClicked = new EventEmitter<MenuItem>();

  public expandedItems = signal<{[key: string]: boolean}>({});

  toggleItem(item: MenuItem): void {
    if (item.children && item.children.length > 0) {
      this.expandedItems.update(currentItems => ({
        ...currentItems,
        [item.label]: !currentItems[item.label]
      }));
    } else if (item.route) {
      this.itemClicked.emit(item);
    }
  }
}