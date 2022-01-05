import { SessionQuery } from './../state/auth-state/session-query';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleEnum, User } from '../login/models/user';
import { SessionStore } from '../state/auth-state/session-store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private sessionStore: SessionStore, private sessionQuery: SessionQuery) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    let userObj = this.sessionQuery.getValue()?.user;

    if (!userObj.token) {
      this.router.navigateByUrl('login/sign-in');
      return false;
    } else {
      if(userObj.roles.indexOf(RoleEnum.ADMIN) > -1 && (route as any).path.indexOf('admin') > -1){
        return true;
      }
      else if((route as any).path.indexOf('admin') == -1){

        return true;
      }
      else{
        return false;
      }

    }
  }
}
