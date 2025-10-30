import { Component, ChangeDetectionStrategy, EventEmitter, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  columns = input<Column[]>([]);
  data = input<any[]>([]);
  paginated = input(false);
  selectable = input(false);
  totalResults = input(0);
  currentPage = input(1);
  itemsPerPage = input(10);

  pageChange = output<number>();
  selectionChange = output<any[]>();

  selectedRows: any[] = [];

  get totalPages(): number {
    return Math.ceil(this.totalResults() / this.itemsPerPage());
  }

  onPageChange(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      // this.currentPage = page; // currentPage è ora un input signal, non può essere modificato direttamente
      this.pageChange.emit(page);
    }
  }

  toggleRowSelection(row: any): void {
    if (!this.selectable()) return;

    const index = this.selectedRows.indexOf(row);
    if (index > -1) {
      this.selectedRows.splice(index, 1);
    } else {
      this.selectedRows.push(row);
    }
    this.selectionChange.emit(this.selectedRows);
  }

  isRowSelected(row: any): boolean {
    return this.selectedRows.includes(row);
  }
}
