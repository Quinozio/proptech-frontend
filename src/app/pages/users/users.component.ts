import { Component, inject, OnInit, signal } from '@angular/core';
import { UserFiltersComponent } from '@proptech/components/users/user-filters/user-filters.component';
import { UsersService, User, UserFilter, UserPage } from '../../services/users.service';
import { DialogService } from '@proptech/services/dialog.service';
import { AddUser } from '@proptech/components/users/add-user/add-user';
import { Column, TableComponent } from '@proptech/components/ui/table/table.component';
import { ButtonComponent } from '@proptech/components/ui/button/button.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserFiltersComponent, TableComponent, ButtonComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users = signal<User[]>([]);
  currentPage = signal<number>(1);
  pageSize = signal<number>(1);
  totalElements = signal<number>(0);
  totalPages = signal<number>(0);
  sort = signal<string[]>([]);

  dialogService = inject(DialogService);

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    const filter: UserFilter = {
      page: this.currentPage(),
      size: this.pageSize(),
      // sort: this.sort(),
    };

    this.usersService.getUsers(filter).subscribe({
      next: (data: UserPage) => {
        this.users.set(data.content);
        this.currentPage.set(data.page.currentPage);
        this.pageSize.set(data.page.size);
        this.totalElements.set(data.page.totalElements);
        this.totalPages.set(data.page.totalPages);
      },
      error: (err) => {
        console.error('Error loading users', err);
      },
    });
  }

  onPageChange(newPage: number): void {
    this.currentPage.set(newPage);
    this.loadUsers();
  }

  onPreviousPage(): void {
    this.currentPage.update((page) => Math.max(0, page - 1));
    this.loadUsers();
  }

  onNextPage(): void {
    this.currentPage.update((page) => Math.min(this.totalPages() - 1, page + 1));
    this.loadUsers();
  }

  openAddUser() {
    this.dialogService.open(AddUser);
  }

  userColumnDefinitions: Column<User>[] = [
    { field: 'username', header: 'Username' },
    { field: 'email', header: 'Email' },
    {
      field: 'roles',
      header: 'Ruoli',
      formatter: (data: any) => data.roles.map((role: any) => role.name).join(', '),
    },
  ];
}
