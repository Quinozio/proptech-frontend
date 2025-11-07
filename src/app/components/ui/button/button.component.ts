import { ChangeDetectionStrategy, Component, input, output, computed } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.primary]': 'variant() === "primary"',
    '[class.secondary]': 'variant() === "secondary"',
    '[class.icon-only]': 'iconOnly()',
    '[attr.aria-disabled]': 'disabled() || isLoading()',
    '[class.loading]': 'isLoading()',
    '(click)': 'onClick()'
  }
})
export class ButtonComponent {
  text = input<string>();
  icon = input<string | undefined>();
  variant = input<'primary' | 'secondary'>('primary');
  iconOnly = input<boolean>(false);
  disabled = input<boolean>(false);
  form = input<string | undefined>(undefined);
  type = input<string>('button');
  isLoading = input<boolean>(false);
  isMaterialIcon = computed(() => this.icon() && !this.icon()?.includes('/'));

  // Outputs
  clickEvent = output<void>();
 
  onClick(): void {
    if (this.disabled() || this.isLoading()) return;
    this.clickEvent.emit();
  }
}
