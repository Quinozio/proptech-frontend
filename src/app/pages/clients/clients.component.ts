import { Component, OnInit, signal } from "@angular/core";
import { ClientFiltersComponent } from "../../components/clients/client-filters/client-filters.component";
import {
  ClientsService,
  Customer,
  CustomerFilter,
  CustomerPage,
} from "../../services/clients.service";

@Component({
  selector: "app-clients",
  standalone: true,
  imports: [ClientFiltersComponent],
  templateUrl: "./clients.component.html",
  styleUrl: "./clients.component.scss",
})
export class ClientsComponent implements OnInit {
  clients = signal<Customer[]>([]);
  currentPage = signal<number>(0);
  pageSize = signal<number>(1);
  totalElements = signal<number>(0);
  totalPages = signal<number>(0);
  sort = signal<string[]>([]);

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
        this.currentPage.set(data.page.number);
        this.pageSize.set(data.page.size);
        this.totalElements.set(data.page.totalElements);
        this.totalPages.set(data.page.totalPages);
      },
      error: (err) => {
        console.error("Error loading clients", err);
      },
    });
  }

  onPreviousPage(): void {
    this.currentPage.update((page) => Math.max(0, page - 1));
    this.loadClients();
  }

  onNextPage(): void {
    this.currentPage.update((page) =>
      Math.min(this.totalPages() - 1, page + 1)
    );
    this.loadClients();
  }

  // clientColumnDefinitions: ColumnDefinition[] = [
  //   { key: "displayName", header: "Nome" },
  //   { key: "email", header: "Email" },
  //   { key: "customerType", header: "Modalità di pagamento predefinita" },
  //   // { key: 'dataCreazione', header: 'Data creazione' }, // Placeholder, da gestire con la data reale
  // ];
}
