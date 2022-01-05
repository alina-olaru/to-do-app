import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private _networkState = new BehaviorSubject<any>(null);
  networkState$ = this._networkState.asObservable();

  constructor() { }

  updateNetworkState(newState:any){
    this._networkState.next(newState);
  }
  getState(){
    return this._networkState.value();
  }
}
