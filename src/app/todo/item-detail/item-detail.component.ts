import { MatCheckboxChange } from '@angular/material/checkbox';
import { ControlsOf, FormGroup, FormControl } from '@ngneat/reactive-forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  importanceTypes,
  Item,
  ItemModel,
  recurrencyTypes,
  TASK_STATE,
} from 'src/app/login/models/item';
import { ItemService } from '../item-list/item.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { TodosStore } from '../state/todos.store';
import { EDIT_STATE } from '../state/todos.model';

export enum VIEW_MODE {
  EDIT,
  READ,
}
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  item: Item = new Item();
  TASK_STATE = TASK_STATE;
  VIEW_MODE = VIEW_MODE;
  currentMode = VIEW_MODE.READ;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private todosStore:TodosStore
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.itemService.getItemById(params['id']).subscribe((el) => {
        this.item = el;
      });
    });
  }

  // button actions
  cancel() {
    this.toggleMode(this.currentMode);
  }
  save(form:FormGroup<ControlsOf<ItemModel>>) {
    console.log(form);
    //TODO send item mapped from formg
    this.itemService.updateTask(this.item).subscribe((response) => {
      this.toggleMode(this.currentMode);
      this.todosStore.updateEditingState(EDIT_STATE.NOT_EDITING);
    });
  }
  // UI helpers
  toggleMode(mode: VIEW_MODE): void {
    this.currentMode =
      mode === VIEW_MODE.EDIT ? VIEW_MODE.READ : VIEW_MODE.EDIT;
  }
  changeDate() {
    this.router.navigateByUrl('profile/date-picker');
  }
}
