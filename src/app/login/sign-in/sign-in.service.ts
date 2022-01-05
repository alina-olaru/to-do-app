import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, RoleEnum, User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }
  signIn(authData : Auth) : Observable<User>{
const x = new User();
x.token="4";
x.roles = [RoleEnum.BASIC_USER]
// x.roles = [RoleEnum.ADMIN];
    return new Observable(ebs=>{
      ebs.next(x);
    })
  }

}
