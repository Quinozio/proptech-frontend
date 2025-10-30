import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { catchError, throwError } from 'rxjs';

export const unauthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const oauthService = inject(OAuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('Errore 401: Non autorizzato. Effettuando il logout e reindirizzando alla pagina di login.');
        oauthService.logOut();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};
