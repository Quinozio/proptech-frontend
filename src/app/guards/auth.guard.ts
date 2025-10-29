import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map, switchMap, take, filter } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isDoneLoading$.pipe(
    filter(isDoneLoading => isDoneLoading),
    take(1),
    switchMap(() => authService.isLoggedIn),
    take(1),
    map(isLoggedIn => {
      console.log("AuthGuard - isLoggedIn:", isLoggedIn);
      if (isLoggedIn) {
        return true;
      } else {
        return router.createUrlTree(['/login']);
      }
    })
  );
};
