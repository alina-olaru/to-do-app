import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  IMPORTANCE,
  Item,
  RECURENCY_TYPE,
  RequrencyDetails,
  TASK_STATE,
} from 'src/app/login/models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getItems(): Observable<Item[]> {
    const i = new Item();
    i.description = 'desc';
    i.title = 'read';
    i.startDate = new Date().toString();
    i.endDate = new Date().toString();
    i.levelOfImportance = IMPORTANCE.MEDIUM;
    i.recurrency = new RequrencyDetails();
    i.recurrency.isRecurrent = true;
    i.isDone = TASK_STATE.DONE;
    i.id = 0;
    i.recurrency.type = RECURENCY_TYPE.DAILY;
    return new Observable((obs) => {
      obs.next([i, i, i, i, i, i]);
    });
  }

  getItemById(id: number): Observable<Item> {
    const i = new Item();
    i.description = 'desc';
    i.title = 'read';
    i.startDate = new Date().toString();
    i.endDate = new Date().toString();
    i.levelOfImportance = IMPORTANCE.MEDIUM;
    i.recurrency = new RequrencyDetails();
    i.recurrency.isRecurrent = true;
    i.isDone = TASK_STATE.DONE;
    i.id = 0;
    i.recurrency.type = RECURENCY_TYPE.DAILY;
    return new Observable((obs) => {
      obs.next(i);
    });
  }

  markTaskAsDone(id: number, state: TASK_STATE) {
    const i = new Item();
    i.description = 'desc';
    i.title = 'read';
    i.startDate = new Date().toString();
    i.endDate = new Date().toString();
    i.levelOfImportance = IMPORTANCE.MEDIUM;
    i.recurrency = new RequrencyDetails();
    i.recurrency.isRecurrent = true;
    i.isDone = state;
    i.id = 0;
    i.recurrency.type = RECURENCY_TYPE.DAILY;
    return new Observable((obs) => {
      obs.next(i);
    });
  }
  removeTask(id: number): Observable<any> {
    return new Observable();
  }
  updateTask(task:Item): Observable<any>{
    return new Observable(obe=>{
      obe.next(true);
    });
  }
  addTask(task:Item): Observable<any>{
    return new Observable(obe=>{
      obe.next(true);
    });
  }
}
