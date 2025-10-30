import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from './components/ui/dialog/dialog.component';
import { DialogService } from './services/dialog.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogComponent, NgComponentOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('proptech-frontend');
  
  protected dialogService = inject(DialogService);

  isOpenDialog = this.dialogService.isOpen;
  dialogTitle = this.dialogService.dialogTitle;
  dialogContentComponent = this.dialogService.dialogContentComponent;

  closeDialog(): void {
    this.dialogService.close();
  }
}
