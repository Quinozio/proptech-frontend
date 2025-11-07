import { Component, inject, OnInit, signal } from '@angular/core';
import { ClientFiltersComponent } from '@proptech/components/clients/client-filters/client-filters.component';
import {
  ClientsService,
  Customer,
  CustomerFilter,
  CustomerPage,
} from '../../services/clients.service';
import { DialogService } from '@proptech/services/dialog.service';
import { AddClient } from '@proptech/components/clients/add-client/add-client';
import { Column, TableComponent } from '@proptech/components/ui/table/table.component';
import { ButtonComponent } from '@proptech/components/ui/button/button.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ClientFiltersComponent, TableComponent, ButtonComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {
  clients = signal<Customer[]>([]);
  currentPage = signal<number>(1);
  pageSize = signal<number>(1);
  totalElements = signal<number>(0);
  totalPages = signal<number>(0);
  sort = signal<string[]>([]);

  dialogService = inject(DialogService);

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    const filter: CustomerFilter = {
      page: this.currentPage(),
      size: this.pageSize(),
      // sort: this.sort(),
    };

    this.clientsService.getCustomers(filter).subscribe({
      next: (data: CustomerPage) => {
        this.clients.set(data.content);
        this.currentPage.set(data.page.currentPage);
        this.pageSize.set(data.page.size);
        this.totalElements.set(data.page.totalElements);
        this.totalPages.set(data.page.totalPages);
      },
      error: (err) => {
        console.error('Error loading clients', err);
      },
    });
  }

  onPageChange(newPage: number): void {
    console.log(newPage);
    this.currentPage.set(newPage);
    this.loadClients();
  }

  openAddClient() {
    this.dialogService.open(AddClient, { title: 'Crea cliente' });
  }

  clientColumnDefinitions: Column<Customer>[] = [
    { field: 'displayName', header: 'Nome' },
    { field: 'email', header: 'Email' },
    { field: 'customerType', header: 'Modalità di pagamento predefinita' },
  ];
}
