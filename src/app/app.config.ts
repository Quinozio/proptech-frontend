import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthConfig, provideOAuthClient } from 'angular-oauth2-oidc';

import { routes } from './app.routes';

export const authConfig: AuthConfig = {
  issuer: 'http://192.168.0.124:9000',
  redirectUri: 'http://localhost:4200/dashboard',
  clientId: 'angular-spa-client',
  scope: 'openid',
  responseType: 'code',
  disableAtHashCheck: true,
  showDebugInformation: true,
  postLogoutRedirectUri: 'http://localhost:4200/login',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideOAuthClient(),
  ]
};
