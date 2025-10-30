import { Injectable, signal, Type } from '@angular/core';
// import { Subject } from 'rxjs'; // Rimosso Subject

export interface DialogConfig {
  title?: string;
  data?: any;
  closeOnBackdropClick?: boolean; // Aggiunto per il nuovo input
}

@Injectable({ providedIn: 'root' })
export class DialogService {
  // private dialogState = new Subject<{ isOpen: boolean; config?: DialogConfig }>(); // Rimosso Subject
  // dialogState$ = this.dialogState.asObservable(); // Rimosso Observable

  readonly isOpen = signal<boolean>(false);
  readonly dialogTitle = signal<string>('');
  readonly dialogContentComponent = signal<Type<any> | null>(null);
  readonly closeOnBackdropClick = signal<boolean>(true); // Nuovo signal per closeOnBackdropClick

  private dialogResultPromise: Promise<any> | null = null;
  private dialogResultResolve: ((value: any | PromiseLike<any>) => void) | null = null;

  open(component: Type<any>, config?: DialogConfig): Promise<any> {
    this.dialogContentComponent.set(component);
    this.dialogTitle.set(config?.title || '');
    this.closeOnBackdropClick.set(config?.closeOnBackdropClick ?? true); // Imposto il valore
    this.isOpen.set(true);

    this.dialogResultPromise = new Promise(resolve => {
      this.dialogResultResolve = resolve;
    });
    return this.dialogResultPromise;
  }

  close(result?: any): void {
    this.isOpen.set(false);
    // Ritardo la rimozione del contenuto per permettere all'animazione di uscita di completarsi
    setTimeout(() => {
      this.dialogContentComponent.set(null);
      this.dialogTitle.set('');
      if (this.dialogResultResolve) {
        this.dialogResultResolve(result);
        this.dialogResultResolve = null; // Resetta per il prossimo dialog
        this.dialogResultPromise = null;
      }
    }, 300); // Durata dell'animazione in ms
  }
}
