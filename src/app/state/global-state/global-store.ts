import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from '../../login/models/user';
export interface GlobalState {
  chosenDate: Date;
}
export function createInitialState(): GlobalState {
  return {
    chosenDate: new Date(),
  };
}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class GlobalStore extends Store<GlobalState> {
  constructor() {
    super(createInitialState());
  }
}
