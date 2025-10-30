import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { environment } from "../../environments/environment";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const oauthService = inject(OAuthService);
  const accessToken = oauthService.getIdToken();
  const isApiUrl = req.url.startsWith(environment.apiUrl);

  if (accessToken && isApiUrl) {
    console.log(req.url);
    const cloned = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${accessToken}`),
    });
    return next(cloned);
  }

  return next(req);
};
