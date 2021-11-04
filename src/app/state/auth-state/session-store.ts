import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from '../../login/models/user';
export interface SessionState {
  user: User;
}
export function createInitialState(): SessionState {
  return {
    user: new User(),
  };
}
@Injectable({providedIn:'root'})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
