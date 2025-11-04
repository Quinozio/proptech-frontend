import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { ToastService } from "../../../services/toast.service";

@Component({
  selector: "app-toast-container",
  imports: [NgClass],
  template: `
    @if (toastService.toasts().length > 0) { @for (toast of
    toastService.toasts(); track toast.id) {
    <div
      class="toast-container {{ toast.position }}"
      [style.--toast-duration.ms]="toast.duration"
    >
      <div
        class="toast-message"
        [ngClass]="{
          'toast-success': toast.type === 'success',
          'toast-error': toast.type === 'error',
          'toast-warning': toast.type === 'warning',
          'toast-info': toast.type === 'info',
        }"
      >
        {{ toast.message }}
        <button
          class="toast-close-button"
          (click)="toastService.remove(toast.id)"
        >
          &times;
        </button>
      </div>
    </div>
    } }
  `,
  styleUrl: "./toast-container.component.scss",
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {}
}
