import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserInput } from './user-input';
import { environment } from 'src/environments/environment';

interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInFlag: ReplaySubject<boolean>;

  constructor(private http: HttpClient) {
    this.loggedInFlag = new ReplaySubject(1);
    this.loggedInFlag.next(localStorage.getItem('token') !== null);
  }

  login(userInput: UserInput): Observable<void> {
    const route = environment.wsBaseUrl + '/login';

    return this.http.post<TokenResponse>(route, userInput).pipe(
      map((tokenResponse) => {
        localStorage.setItem('token', tokenResponse.token);
        this.loggedInFlag.next(true);
        return;
      }),
      catchError((error) => {
        this.loggedInFlag.next(false);
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedInFlag.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedInFlag.asObservable();
  }
}
