import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  Renderer2,
  signal,
  TemplateRef,
  ViewContainerRef,
  WritableSignal,
  ComponentRef,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  PopoverService,
  PopoverRef,
} from "../../../../app/services/popover.service";
import { PopoverContainerComponent } from "./popover-container.component";

type PopoverPosition = "top" | "right" | "bottom" | "left" | "auto";
type PopoverAppendTo = "body" | undefined;

@Directive({
  selector: "[appPopover]",
  standalone: true,
  host: {
    "(click)": "onClick($event)",
  },
})
export class PopoverDirective implements OnDestroy {
  private popoverService = inject(PopoverService);
  private elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);
  private renderer = inject(Renderer2);

  appPopover = input<string | TemplateRef<any>>();
  popoverPosition = input<PopoverPosition>("bottom");
  appendTo = input<PopoverAppendTo>(undefined);

  private popoverComponentRef: ComponentRef<PopoverContainerComponent> | null =
    null;
  private isVisible: WritableSignal<boolean> = signal(false);
  private popoverRef: PopoverRef | null = null;

  constructor() {
    effect(() => {
      if (this.isVisible()) {
        this.addOutsideClickListener();
      } else {
        this.removeOutsideClickListener();
      }
    });

    this.popoverService
      .onOpenPopover()
      .pipe(takeUntilDestroyed())
      .subscribe(({ triggerElement }) => {
        if (
          triggerElement !== this.elementRef.nativeElement &&
          this.isVisible()
        ) {
          this.closePopover();
        }
      });
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.togglePopover();
  }

  private togglePopover() {
    if (this.isVisible()) {
      this.closePopover();
    } else {
      this.openPopover();
    }
  }

  openPopover() {
    if (!this.popoverComponentRef) {
      this.popoverComponentRef = this.viewContainerRef.createComponent(
        PopoverContainerComponent
      );

      this.popoverComponentRef.setInput("popoverContent", this.appPopover());
      this.popoverComponentRef.setInput(
        "popoverPosition",
        this.popoverPosition()
      );
      this.popoverComponentRef.setInput("appendTo", this.appendTo());
      this.popoverComponentRef.setInput(
        "triggerElement",
        this.elementRef.nativeElement
      );

      this.popoverComponentRef.instance.closed.subscribe(() => {
        this.destroyComponentRefAndCleanup();
      });

      if (this.appendTo() === "body") {
        document.body.appendChild(
          this.popoverComponentRef.location.nativeElement
        );
      }
    }

    this.isVisible.set(true);
    this.popoverRef = this.popoverService.open(
      this.popoverComponentRef!.instance,
      { content: this.appPopover()!, position: this.popoverPosition() },
      this.elementRef.nativeElement
    );
    this.popoverComponentRef.instance.open();
  }

  closePopover() {
    if (this.popoverRef) {
      this.popoverRef.close();
    }
  }

  private destroyComponentRefAndCleanup() {
    if (this.popoverComponentRef) {
      this.popoverComponentRef.destroy();
      this.popoverComponentRef = null;
      this.popoverRef = null;
      this.isVisible.set(false);
      this.removeOutsideClickListener();
    }
  }

  private outsideClickListener: (() => void) | null = null;

  private addOutsideClickListener() {
    this.outsideClickListener = this.renderer.listen(
      "document",
      "click",
      (event) => {
        const popoverElementHost =
          this.popoverComponentRef?.location.nativeElement;
        const popoverContentVisibleElement =
          popoverElementHost?.querySelector(".popover");
        const targetElement = event.target as HTMLElement;

        if (
          this.isVisible() &&
          popoverContentVisibleElement &&
          !popoverContentVisibleElement.contains(targetElement) &&
          !this.elementRef.nativeElement.contains(targetElement)
        ) {
          this.closePopover();
        }
      }
    );
  }

  private removeOutsideClickListener() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
      this.outsideClickListener = null;
    }
  }

  ngOnDestroy(): void {
    if (this.popoverComponentRef) {
      this.destroyComponentRefAndCleanup();
    }
    this.removeOutsideClickListener();
  }
}
