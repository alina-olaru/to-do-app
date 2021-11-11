import { GlobalState } from './../../state/global-state/global-store';
import { Injectable } from '@angular/core';
import { EntityStore, Store, StoreConfig } from '@datorama/akita';
import { EDIT_STATE, TodosState } from './todos.model';

/**
 * Create initial state
 */
export function createInitialState(): TodosState {
  return {
    ui: {
      itemEditing: EDIT_STATE.NOT_EDITING,
    },
  };
}

/**
 * Todos store
 *
 * @export
 * @class TodosStore
 * @extends {Store<TodosState>}
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(createInitialState());
  }
  updateEditingState(state: EDIT_STATE) {
    this.update({ ui: { itemEditing: state } });
  }
}
