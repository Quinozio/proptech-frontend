import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { environment } from "@environments/environment";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const cloned = req.clone({
    withCredentials: true,
  });
  return next(cloned).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        window.location.href = `${environment.authUrl}/authorization/proptech-bff`;
      }
      return throwError(() => error);
    })
  );
};
