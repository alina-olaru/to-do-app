import { EDIT_STATE } from './../state/todos.model';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { ActivatedRoute, Router } from '@angular/router';
import { ControlsOf, FormControl, FormGroup } from '@ngneat/reactive-forms';
import {
  importanceTypes,
  Item,
  ItemModel,
  recurrencyTypes,
  TASK_STATE,
} from 'src/app/login/models/item';
import { VIEW_MODE } from '../item-detail/item-detail.component';
import { ItemService } from '../item-list/item.service';
import { TodosStore } from '../state/todos.store';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit, OnDestroy {
  // communication with other components
  @Input() item: Item = new Item();
  @Output() currentMode = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter();
  // variables for logic
  ItemForm: any;
  lastStateOfItemForm:any;
  // UI variables
  updateStatusText = '';
  importanceTypes = importanceTypes;
  recurrencyTypes = recurrencyTypes;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private todosStore: TodosStore
  ) {}
  ngOnDestroy(): void {
    this.todosStore.updateEditingState(EDIT_STATE.NOT_EDITING);
  }

  ngOnInit(): void {


    this.initializeForm();
    this.ItemForm.valueChanges.subscribe((el: any)=>{
      console.log(el);
    console.log( JSON.stringify(el)==JSON.stringify(this.lastStateOfItemForm.value));
    if(JSON.stringify(el)==JSON.stringify(this.lastStateOfItemForm.value)){
      this.todosStore.updateEditingState(EDIT_STATE.NOT_EDITING);
    }
    else{
      this.todosStore.updateEditingState(EDIT_STATE.EDITING);
    }
    })
    if (this.item?.id) {
      this.updateStatusText =
        this.item.isDone === TASK_STATE.DONE
          ? 'Mark as UNDONE'
          : 'Mark as Done';
    }
  }

  // initialize
  private initializeForm(): void {
    this.ItemForm = new FormGroup<ControlsOf<ItemModel>>({
      description: new FormControl(this.item.description),
      title: new FormControl(this.item.title),
      isDone: new FormControl(this.item.isDone),
      startDate: new FormControl(new Date(this.item.startDate)),
      endDate: new FormControl(new Date(this.item.endDate)),
      recurrency: new FormControl(this.item.recurrency?.type),
      levelOfImportance: new FormControl(this.item.levelOfImportance),
    });
    this.lastStateOfItemForm = new FormGroup<ControlsOf<ItemModel>>({
      description: new FormControl(this.item.description),
      title: new FormControl(this.item.title),
      isDone: new FormControl(this.item.isDone),
      startDate: new FormControl(new Date(this.item.startDate)),
      endDate: new FormControl(new Date(this.item.endDate)),
      recurrency: new FormControl(this.item.recurrency?.type),
      levelOfImportance: new FormControl(this.item.levelOfImportance),
    });

  }

  // output emiters
  cancel() {
    this.onCancel.emit();
  }
  save() {
    this.onSave.emit(this.ItemForm);

  }
  //UI helpers

  changeDate() {
    this.router.navigateByUrl('profile/date-picker');
  }
  toggleMode(): void {
    this.currentMode.emit(VIEW_MODE.EDIT);
  }
  updateStatus(event: MatCheckboxChange): void {
    this.updateStatusText =
      event.checked === true ? 'Mark as UNDONE' : 'Mark as Done';
  }
  //getters
  get isDone(): boolean {
    return (this.ItemForm as FormGroup<ControlsOf<Item>>).controls['isDone']
      ?.value === TASK_STATE.DONE
      ? true
      : false;
  }
  get recurrency() {
    return (this.ItemForm as FormGroup<ControlsOf<Item>>).controls['recurrency']
      ?.value;
  }
  get importance() {
    return (this.ItemForm as FormGroup<ControlsOf<Item>>).controls[
      'levelOfImportance'
    ]?.value;
  }
}
