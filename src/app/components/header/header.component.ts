import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    ButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
