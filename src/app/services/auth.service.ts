import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, from, of } from "rxjs";
import { filter, map, tap, switchMap, catchError } from "rxjs/operators";
import { AuthConfig, OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "../app.config"; // Import the authConfig from app.config

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private _isDoneLoading$ = new BehaviorSubject<boolean>(false);
  private _authReady$ = new BehaviorSubject<boolean>(false);

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);

    from(this.oauthService.loadDiscoveryDocumentAndTryLogin()).pipe(
      tap(() => this._isDoneLoading$.next(true)),
      tap(() => this.loggedIn.next(this.oauthService.hasValidAccessToken())),
      tap(() => this._authReady$.next(true)),
      catchError(error => {
        console.error("AuthService - Errore nel caricamento del discovery document o nel login:", error);
        this._isDoneLoading$.next(true); // Sblocca la guardia anche in caso di errore
        this.loggedIn.next(false); // Imposta lo stato a non loggato
        this._authReady$.next(true);
        return of(false); // Ritorna un observable che emette false per completare il flusso
      })
    ).subscribe();

    // Automatically renew token
    this.oauthService.setupAutomaticSilentRefresh();

    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received' || event.type === 'token_refreshed') {
        this.loggedIn.next(this.oauthService.hasValidAccessToken());
      }
      if (event.type === 'session_terminated' || event.type === 'logout') {
        this.loggedIn.next(false);
      }
    });
  }

  get isDoneLoading$(): Observable<boolean> {
    return this._isDoneLoading$.asObservable();
  }

  get authReady$(): Observable<boolean> {
    return this._authReady$.asObservable();
  }

  get isLoggedIn(): Observable<boolean> {
    return combineLatest([this.authReady$, this.loggedIn]).pipe(
      filter(([authReady]) => authReady),
      map(([, isLoggedIn]) => isLoggedIn),
    );
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
    this.loggedIn.next(false);
  }

  hasValidAccessToken(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
  getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  getIdentityClaims(): any {
    return this.oauthService.getIdentityClaims();
  }
}
