import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
} from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { ButtonComponent } from "../ui/button/button.component";
import { PopoverDirective } from "../ui/popover/popover.directive";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [ButtonComponent, PopoverDirective],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
