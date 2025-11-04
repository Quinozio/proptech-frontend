import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
  TemplateRef,
  signal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "@proptech/components/ui/button/button.component";

@Component({
  selector: "app-dialog",
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "dialog-overlay",
    "[class.open]": "isOpen()",
    "(click)": "onBackdropClick($event)",
  },
})
export class DialogComponent {
  isOpen = input<boolean>(false);
  title = input<string>("");
  closeOnBackdropClick = input<boolean>(true);
  closed = output<void>();

  footerTemplate = signal<TemplateRef<any> | null>(null);

  onBackdropClick(event: MouseEvent): void {
    if (
      this.closeOnBackdropClick() &&
      (event.target as HTMLElement).classList.contains("dialog-overlay")
    ) {
      this.close();
    }
  }

  close(): void {
    this.closed.emit();
  }
}
