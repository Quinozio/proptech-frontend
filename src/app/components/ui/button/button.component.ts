import { ChangeDetectionStrategy, Component, EventEmitter, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.primary]': 'variant() === "primary"',
    '[class.secondary]': 'variant() === "secondary"',
    '[class.icon-only]': 'iconOnly()',
    '(click)': 'onClick()'
  }
})
export class ButtonComponent {
  text = input<string>();
  icon = input<string | undefined>();
  variant = input<'primary' | 'secondary'>('primary');
  iconOnly = input<boolean>(false);
  disabled = input<boolean>(false);

  isMaterialIcon = computed(() => this.icon() && !this.icon()?.includes('/'));

  // Outputs
  clickEvent = output<void>();
 
  onClick(): void {
    if (this.disabled()) return;
    this.clickEvent.emit();
  }
}
