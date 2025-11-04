import { inject, TemplateRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PopoverContainerComponent } from '@proptech/components/ui/popover/popover-container.component';

type PopoverPosition = 'top' | 'right' | 'bottom' | 'left' | 'auto';

interface PopoverConfig {
  position?: PopoverPosition;
  content: string | TemplateRef<any>;
}

export class PopoverRef {
  constructor(public popoverContainer: PopoverContainerComponent) {}

  close() {
    this.popoverContainer.close();
  }
}

@Injectable({ providedIn: 'root' })
export class PopoverService {
  private activePopoverRef: PopoverRef | null = null;
  private openPopoverSubject = new Subject<{ config: PopoverConfig; triggerElement: HTMLElement }>();

  open(popoverContainer: PopoverContainerComponent, config: PopoverConfig, triggerElement: HTMLElement): PopoverRef {
    if (this.activePopoverRef) {
      this.activePopoverRef.popoverContainer.markForDestruction();
    }

    const popoverRef = new PopoverRef(popoverContainer);
    this.activePopoverRef = popoverRef;

    this.openPopoverSubject.next({ config, triggerElement });

    return popoverRef;
  }

  closeActivePopover() {
    if (this.activePopoverRef) {
      this.activePopoverRef.popoverContainer.markForDestruction();
      this.activePopoverRef = null;
    }
  }

  onOpenPopover() {
    return this.openPopoverSubject.asObservable();
  }

  deregister(popoverContainer: PopoverContainerComponent) {
    if (this.activePopoverRef && this.activePopoverRef.popoverContainer === popoverContainer) {
      this.activePopoverRef = null;
    }
  }
}
