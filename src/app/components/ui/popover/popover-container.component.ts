import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  output,
  signal,
  OnDestroy,
  WritableSignal,
  TemplateRef,
  Renderer2,
  effect,
  computed,
  Signal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopoverService } from "@proptech/services/popover.service";

type PopoverPosition = "top" | "right" | "bottom" | "left" | "auto";
type PopoverAppendTo = "body" | undefined;

@Component({
  selector: "app-popover-container",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./popover-container.component.html",
  styleUrl: "./popover-container.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[class.is-open]": "isVisible()",
    "[class.is-leaving]": "isLeaving()",
  },
})
export class PopoverContainerComponent implements OnDestroy {
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  popoverService = inject(PopoverService);
  isVisible = signal(false);
  isLeaving = signal(false);
  position = signal({ x: 0, y: 0 });

  popoverContent = input<string | TemplateRef<any>>();
  popoverPosition = input<PopoverPosition>("bottom");
  appendTo = input<PopoverAppendTo>(undefined);
  triggerElement = input<HTMLElement | null>(null);

  closed = output<void>();

  private destroyTimeout: any;

  popoverTemplate = computed(() =>
    this.popoverContent() instanceof TemplateRef
      ? (this.popoverContent() as TemplateRef<any> | null)
      : null
  );

  constructor() {
    effect(() => {
      if (this.isVisible()) {
        requestAnimationFrame(() => {
          this.updatePosition();
        });
      } else {
        if (this.elementRef.nativeElement.querySelector(".popover")) {
          if (this.isLeaving()) {
            this.destroyTimeout = setTimeout(() => {
              this.destroyPopover();
              this.closed.emit();
            }, 200);
          } else {
            this.destroyPopover();
            this.closed.emit();
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.destroyTimeout);
    this.destroyPopover();
  }

  open() {
    if (
      this.appendTo() === "body" &&
      this.elementRef.nativeElement.parentNode !== document.body
    ) {
      document.body.appendChild(this.elementRef.nativeElement);
    }
    this.isLeaving.set(false);
    this.isVisible.set(true);
  }

  close() {
    if (!this.isLeaving()) {
      this.isLeaving.set(true);
      this.isVisible.set(false);
    }
  }

  markForDestruction() {
    clearTimeout(this.destroyTimeout);
    this.destroyPopover();
  }

  private destroyPopover() {
    this.popoverService.deregister(this);

    if (this.elementRef.nativeElement.parentNode) {
      if (
        this.appendTo() === "body" &&
        this.elementRef.nativeElement.parentNode === document.body
      ) {
        document.body.removeChild(this.elementRef.nativeElement);
      } else if (
        this.elementRef.nativeElement.parentNode === this.triggerElement()
      ) {
        this.renderer.removeChild(
          this.elementRef.nativeElement.parentNode,
          this.elementRef.nativeElement
        );
      }
    }
    this.isVisible.set(false);
    this.isLeaving.set(false);
  }

  private updatePosition(): void {
    if (!this.triggerElement() || !this.isVisible()) return;

    const triggerRect = this.triggerElement()!.getBoundingClientRect();
    const popoverElement =
      this.elementRef.nativeElement.querySelector(".popover");

    if (!popoverElement) return;

    const popoverRect = popoverElement.getBoundingClientRect();

    let x = 0;
    let y = 0;
    const offset = 10;
    const position = this.popoverPosition();

    switch (position) {
      case "top":
        x = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        y = triggerRect.top - popoverRect.height - offset;
        break;
      case "bottom":
        x = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        y = triggerRect.bottom + offset;
        break;
      case "left":
        x = triggerRect.left - popoverRect.width - offset;
        y = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        break;
      case "right":
        x = triggerRect.right + offset;
        y = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        break;
      case "auto":
        const viewportWidth =
          window.innerWidth || document.documentElement.clientWidth;
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const availableSpace = {
          top: triggerRect.top,
          bottom: viewportHeight - triggerRect.bottom,
          left: triggerRect.left,
          right: viewportWidth - triggerRect.right,
        };

        let bestPosition: PopoverPosition = "bottom";
        let maxSpace = availableSpace.bottom;

        if (availableSpace.top > maxSpace) {
          maxSpace = availableSpace.top;
          bestPosition = "top";
        }
        if (availableSpace.right > maxSpace) {
          maxSpace = availableSpace.right;
          bestPosition = "right";
        }
        if (availableSpace.left > maxSpace) {
          maxSpace = availableSpace.left;
          bestPosition = "left";
        }
        this.calculateSpecificPosition(
          triggerRect,
          popoverRect,
          bestPosition,
          offset
        );
        return;
    }
    this.calculateSpecificPosition(triggerRect, popoverRect, position, offset);
  }

  private calculateSpecificPosition(
    triggerRect: DOMRect,
    popoverRect: DOMRect,
    position: PopoverPosition,
    offset: number
  ): void {
    let x = 0;
    let y = 0;

    switch (position) {
      case "top":
        x = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        y = triggerRect.top - popoverRect.height - offset;
        break;
      case "bottom":
        x = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        y = triggerRect.bottom + offset;
        break;
      case "left":
        x = triggerRect.left - popoverRect.width - offset;
        y = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        break;
      case "right":
        x = triggerRect.right + offset;
        y = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        break;
    }
    this.position.set({ x, y });
  }

  isTemplateRef(
    content: string | TemplateRef<any> | undefined
  ): content is TemplateRef<any> {
    return content instanceof TemplateRef;
  }
}
