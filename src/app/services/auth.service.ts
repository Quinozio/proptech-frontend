import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, of } from "rxjs";
import { catchError, filter, map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private _isDoneLoading$ = new BehaviorSubject<boolean>(false);
  private _authReady$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkUserStatus().subscribe();
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
      map(([, isLoggedIn]) => isLoggedIn)
    );
  }

  private checkUserStatus(): Observable<boolean> {
    this._isDoneLoading$.next(false);
    this._authReady$.next(false);
    return this.http.get<any>(`${environment.apiUrl}/api/v1/me`).pipe(
      map(() => {
        this.loggedIn.next(true);
        this._isDoneLoading$.next(true);
        this._authReady$.next(true);
        return true;
      }),
      catchError((error) => {
        console.error(
          "AuthService - Errore durante la verifica dello stato utente:",
          error
        );
        this.loggedIn.next(false);
        this._isDoneLoading$.next(true);
        this._authReady$.next(true);
        return of(false);
      })
    );
  }

  login() {
    window.location.href = `${environment.authUrl}/authorization/proptech-bff`;
  }

  logout() {
    this.http
      .post(`${environment.apiUrl}/logout`, {})
      .pipe(
        catchError((error) => {
          console.error("Errore durante la richiesta di logout locale:", error);
          return of(null); // Continua il flusso anche in caso di errore
        }),
        map(() => {
          // this.login();
          // this.loggedIn.next(false);
        })
      )
      .subscribe();
  }
}
