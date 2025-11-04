import { Component } from '@angular/core';
import { AuthService } from '@proptech/services/auth.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '@proptech/components/ui/button/button.component';

@Component({
  selector: 'app-login',
  imports: [
    ButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }
}
 