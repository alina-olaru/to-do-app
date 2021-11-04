import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session-store';

@Injectable({providedIn:'root'})
export class SessionQuery extends Query<SessionState> {
  session$ = this.select();
  currentUser$ = this.select((state) => state.user);
  token$ = this.select((state) => state.user.token);

  constructor(protected store: SessionStore) {
    super(store);
  }
}
