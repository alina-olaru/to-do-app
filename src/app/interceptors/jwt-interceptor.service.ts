import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionQuery } from '../state/auth-state/session-query';
import { SessionStore } from '../state/auth-state/session-store';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private sessionStore: SessionStore,
    private sessionQuery: SessionQuery,
    private router:Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any> > {
    let userObj = this.sessionQuery.getValue()?.user;
    const isLoggedIn = userObj?.token;
    if (isLoggedIn) {
      const modifiedReq = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${userObj.token}`),
      });
      return next.handle(modifiedReq);
    }
    this.router.navigateByUrl('login/sign-in');
    return new Observable();
  }
}
