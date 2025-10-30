import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dialog',
  // standalone: true, // Rimosso standalone: true
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // Aggiunto OnPush
  host: {
    'class': 'dialog-overlay',
    '[class.open]': 'isOpen()',
    '(click)': 'onBackdropClick($event)' // Aggiunto gestore click sul backdrop
  }
})
export class DialogComponent {
  isOpen = input<boolean>(false);
  title = input<string>('');
  closeOnBackdropClick = input<boolean>(true); // Nuovo input
  closed = output<void>();

  onBackdropClick(event: MouseEvent): void {
    // Chiude il dialog solo se il click è sull'overlay e closeOnBackdropClick è true
    if (this.closeOnBackdropClick() && (event.target as HTMLElement).classList.contains('dialog-overlay')) {
      this.close();
    }
  }

  close(): void {
    this.closed.emit();
  }
}
