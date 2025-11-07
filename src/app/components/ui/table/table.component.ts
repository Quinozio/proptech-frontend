import {
  Component,
  ChangeDetectionStrategy,
  TemplateRef,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@proptech/components/ui/button/button.component';

export interface Column<T> {
  field: keyof T;
  header: string;
  formatter?: (data: T) => string;
  headerTemplate?: TemplateRef<any>;
  cellTemplate?: TemplateRef<any>;
}

@Component({
  selector: 'app-table',
  standalone: true, // Best Practice: Sempre standalone
  imports: [CommonModule, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T extends { id: any }> {
  columns = input.required<Column<T>[]>();
  data = input.required<T[]>();
  rowLink = input<(row: T) => string | undefined>();

  paginated = input(false);
  selectable = input(true);
  totalResults = input(0);
  currentPage = input(1);
  itemsPerPage = input(10);

  pageChange = output<number>();
  selectionChange = output<T[]>();
  rowClick = output<T>();
  totalPages = input(1);

  private selectedRows = signal<T[]>([]);

  allRowsSelected = computed(() => {
    const data = this.data();
    return data.length > 0 && this.selectedRows().length === data.length;
  });
  someRowsSelected = computed(() => this.selectedRows().length > 0 && !this.allRowsSelected());

  onPageChange(page: number): void {
    if (page > 0 && page <= this.totalPages()) {
      this.pageChange.emit(page);
    }
  }

  toggleAllRowsSelection(): void {
    if (this.allRowsSelected()) {
      this.selectedRows.set([]);
    } else {
      this.selectedRows.set([...this.data()]);
    }
    this.selectionChange.emit(this.selectedRows());
  }

  toggleRowSelection(row: T): void {
    if (!this.selectable()) return;

    this.selectedRows.update((currentSelection) => {
      const existingRow = currentSelection.find((r) => r.id === row.id);
      if (existingRow) {
        return currentSelection.filter((r) => r.id !== row.id);
      } else {
        return [...currentSelection, row];
      }
    });

    this.selectionChange.emit(this.selectedRows());
  }

  isRowSelected(row: T): boolean {
    return this.selectedRows().some((selectedRow) => selectedRow.id === row.id);
  }

  onRowClick(row: T): void {
    this.rowClick.emit(row);
  }
}
