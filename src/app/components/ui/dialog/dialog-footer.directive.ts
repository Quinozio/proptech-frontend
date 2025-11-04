import { Directive, inject, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { DialogComponent } from "./dialog.component";

@Directive({
  selector: "[appDialogFooter]",
  standalone: true,
})
export class DialogFooterDirective implements OnInit, OnDestroy {
  private templateRef = inject(TemplateRef);
  private dialog = inject(DialogComponent);

  ngOnInit(): void {
    this.dialog.footerTemplate.set(this.templateRef);
  }

  ngOnDestroy(): void {
    if (this.dialog.footerTemplate() === this.templateRef) {
      this.dialog.footerTemplate.set(null);
    }
  }
}
