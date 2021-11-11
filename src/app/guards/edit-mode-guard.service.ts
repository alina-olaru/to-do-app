import { TodosStore } from './../todo/state/todos.store';
import { TodosState } from './../todo/state/todos.model';
import { TodosQuery } from './../todo/state/todos.query';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EditItemComponent } from '../todo/edit-item/edit-item.component';
import { EDIT_STATE } from '../todo/state/todos.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class EditModeGuard implements CanDeactivate<EditItemComponent> {
  constructor(private todosQuery: TodosQuery, private router:Router, private todoStore: TodosStore) {}
  canDeactivate(
    component: EditItemComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      console.log(this.todosQuery.getValue()?.ui?.itemEditing, EDIT_STATE.NOT_EDITING);
    if (this.todosQuery.getValue()?.ui?.itemEditing == EDIT_STATE.NOT_EDITING) {
      return true;
    } else {
      return new Promise((resolve,reject)=>{
        Swal.fire({
          title:
            "Your changes are not saved yet, Do you still want to navigate away?",
          showCloseButton: true,
          showCancelButton: true,
          showConfirmButton: true,
          allowEnterKey: false,
          allowOutsideClick: false,
          cancelButtonText: 'LEAVE anyway',
          confirmButtonText: 'I want to keep editing',
        }).then((response) => {

          console.log(response);
          if (response.isConfirmed) {
            resolve(false);
          }
          if (response.isDismissed && nextState?.url) {
            this.todoStore.updateEditingState(EDIT_STATE.NOT_EDITING);
            this.router.navigateByUrl(nextState?.url);
            resolve(true);
          }
          else{
            resolve(true);
          }

        }
        );
      })
      //you're nou editing


    }
  }
}
