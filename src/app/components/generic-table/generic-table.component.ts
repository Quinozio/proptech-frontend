import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

interface ColumnDefinition {
  key: string;
  label: string;
}

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [NgFor],
  template: `
    <table>
      <thead>
        <tr>
          @for (column of columns; track column.key) {
            <th>{{ column.label }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of data; track $index) {
          <tr>
            @for (column of columns; track column.key) {
              <td>{{ row[column.key] }}</td>
            }
          </tr>
        }
      </tbody>
    </table>
  `,
  styleUrl: './generic-table.component.scss'
})
export class GenericTableComponent {
  @Input() data: any[] = [];
  @Input() columns: ColumnDefinition[] = [];
}
