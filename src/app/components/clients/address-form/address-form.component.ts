import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  SkipSelf,
} from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
  formGroupName = input.required<string>();
  title = input.required<string>();
  idPrefix = input.required<string>();

  private controlContainer = inject(ControlContainer);
  
  form = computed(
    () =>
      this.controlContainer.control?.get(this.formGroupName()) as FormGroup
  );
}
