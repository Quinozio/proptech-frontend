import { HttpInterceptorFn, HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

export const unauthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error(
          "Errore 401: Non autorizzato. Effettuando il logout e reindirizzando alla pagina di login."
        );
        authService.logout();
        router.navigate(["/login"]);
      }
      return throwError(() => error);
    })
  );
};
