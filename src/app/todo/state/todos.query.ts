import { Injectable } from '@angular/core';
import { EntityUIQuery, Query } from '@datorama/akita';
import { TodosState } from './todos.model';
import { TodosStore } from './todos.store';

/**
 * Todos query
 *
 * @export
 * @class TodosQuery
 * @extends {Query<TodosState>}
 */
@Injectable({ providedIn: 'root' })
export class TodosQuery extends EntityUIQuery<TodosState> {

  constructor(protected store: TodosStore) {
    super(store);
  }
}
