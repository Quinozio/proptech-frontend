import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService, Role, CreateUser } from '@proptech/services/users.service';
import { DialogService } from '@proptech/services/dialog.service';
import { DialogFooterDirective } from '@proptech/components/ui/dialog/dialog-footer.directive';
import { ButtonComponent } from '@proptech/components/ui/button/button.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'add-user-container',
  },
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogFooterDirective,
    ButtonComponent,
  ],
})
export class AddUser {
  private fb = inject(FormBuilder);
  private usersService = inject(UsersService);
  private dialogService = inject(DialogService);

  userForm: FormGroup;
  roles = signal<Role[]>([]);

  constructor() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roles: [[0], Validators.required],
    });

    this.loadRoles();
  }

  loadRoles(): void {
    this.usersService.getRoles().subscribe((roles) => {
      this.roles.set(roles);
    });
  }

  close(): void {
    this.dialogService.close();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      const newUser: CreateUser = {
        username: formValue.username,
        email: formValue.email,
        password: formValue.password,
        roles: formValue.roles,
      };

      this.usersService.createUser(newUser).subscribe({
        next: (response) => {
          console.log('User Created:', response);
          this.dialogService.close(true); // close dialog and signal success
        },
        error: (error) => console.error('Error creating user:', error),
      });
    } else {
      console.log('Form is invalid');
      this.userForm.markAllAsTouched();
    }
  }
}
