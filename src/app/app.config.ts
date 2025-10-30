import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthConfig, provideOAuthClient } from 'angular-oauth2-oidc';

import { routes } from './app.routes';

const apiScopes = [
  'user:read', 'user:create', 'user:update', 'user:delete',
  'role:read', 'role:create', 'role:update', 'role:delete',
  'permission:read',
  'customer:read', 'customer:create', 'customer:update', 'customer:delete',
  'admin:access'
];

const allScopes = ['openid', 'offline_access', ...apiScopes].join(' ');

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:9000',
  redirectUri: 'http://localhost:4200/dashboard',
  clientId: 'angular-spa-client',
  scope: allScopes,
  responseType: 'code',
  disableAtHashCheck: true,
  showDebugInformation: true,
  postLogoutRedirectUri: 'http://localhost:4200/login',
  disablePKCE: false,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideOAuthClient()
  ]
};
