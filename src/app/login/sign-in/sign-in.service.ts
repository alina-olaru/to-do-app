import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }
  signIn(authData : Auth) : Observable<User>{
    return new Observable(ebs=>{
      ebs.next();
    })
  }
}
