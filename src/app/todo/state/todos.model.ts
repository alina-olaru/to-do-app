import { EntityState } from "@datorama/akita";
import { Item } from "src/app/login/models/item";

/**
 * Todos state
 *
 * @export
 * @interface TodosState
 */

export enum EDIT_STATE{
  EDITING = 1,
  NOT_EDITING = 2
}
export interface TodosState extends EntityState<Item, number>{
  ui:{
    itemEditing : EDIT_STATE
  }

}
