import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FygoUser } from 'src/app/fygo-shared/models/fygo-user.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  private set token(val: string) {
    localStorage.setItem('token', val);
  }

  private get token(): string {
    return localStorage.getItem('token');
  }

  public get hasToken(): boolean {
    return !!this.token;
  }

  public getToken(): string {
    //  TODO refactor this ?
    //  TS doesn't allow for getter and setter to have different accessors;
    //  And I do not want to make my token setter public - hence this method kinda duplicates token getter
    return this.token;
  }

  public login(username: string, password: string): Observable<FygoUser> {
    const url = `https://october-11.herokuapp.com/api-token-auth/`;
    return this.httpClient.post<FygoUser>(url, { username, password })
      .pipe(
        tap((fygoUser: FygoUser) => {
          this.token = fygoUser.token;
        }),
        catchError(error => {
          console.log('There was an error during login:' + error);
          throw error;
        })
      );
  }
}
