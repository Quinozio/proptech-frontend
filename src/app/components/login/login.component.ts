import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../ui/button/button.component';

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

  login() {
    console.log("Login button clicked");
    this.authService.login();
  }
}
 