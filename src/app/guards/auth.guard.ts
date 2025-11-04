import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { map, switchMap, take, filter, catchError, of } from "rxjs";
import { environment } from "../../environments/environment";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.isDoneLoading$.pipe(
    filter((isDoneLoading) => isDoneLoading),
    take(1),
    switchMap(() =>
      authService.isLoggedIn.pipe(
        catchError(() => {
          console.error(
            "AuthGuard - Errore durante il recupero dello stato di accesso."
          );
          return of(false);
        })
      )
    ),
    take(1),
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return true;
      } else {
        authService.logout();
        return false;
      }
    }),
    catchError((error) => {
      console.error(
        "AuthGuard - Errore critico durante il caricamento o la verifica dell'autenticazione:",
        error
      );
      authService.logout();
      return of(false);
    })
  );
};
