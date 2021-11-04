import { MatCheckboxChange } from '@angular/material/checkbox';
import { ControlsOf, FormGroup, FormControl } from '@ngneat/reactive-forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { importanceTypes, Item, ItemModel, recurrencyTypes, TASK_STATE } from 'src/app/login/models/item';
import { ItemService } from '../item-list/item.service';
import { MatDatepicker } from '@angular/material/datepicker';

enum VIEW_MODE {
  EDIT,
  READ,
}
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  importanceTypes=importanceTypes;
  recurrencyTypes = recurrencyTypes;
  item: Item = new Item();
  TASK_STATE = TASK_STATE;
  VIEW_MODE = VIEW_MODE;
  currentMode = VIEW_MODE.READ;
  ItemForm: any;
  updateStatusText = '';
  get isDone(): boolean {
    console.log(
      (this.ItemForm as FormGroup<ControlsOf<Item>>).controls['isDone']?.value
    );
    return (this.ItemForm as FormGroup<ControlsOf<Item>>).controls['isDone']
      ?.value === TASK_STATE.DONE
      ? true
      : false;
  }
  get recurrency() {
    return (this.ItemForm as FormGroup<ControlsOf<Item>>).controls['recurrency']?.value;
  }
  get importance() {
    return (this.ItemForm as FormGroup<ControlsOf<Item>>).controls['levelOfImportance']?.value;
  }
  updateStatus(event: MatCheckboxChange): void {
    this.updateStatusText =
      event.checked === true ? 'Mark as UNDONE' : 'Mark as Done';
  }
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.itemService.getItemById(params['id']).subscribe((el) => {
        this.item = el;
        this.initializeForm();
        this.updateStatusText =
          this.item.isDone === TASK_STATE.DONE
            ? 'Mark as UNDONE'
            : 'Mark as Done';

      });
    });
  }

  private initializeForm(): void{
    this.ItemForm = new FormGroup<ControlsOf<ItemModel>>({
      description: new FormControl(this.item.description),
      title: new FormControl(this.item.title),
      isDone: new FormControl(this.item.isDone),
      startDate: new FormControl(new Date(this.item.startDate)),
      endDate: new FormControl(new Date(this.item.endDate)),
      recurrency: new FormControl(this.item.recurrency?.type),
      levelOfImportance: new FormControl(this.item.levelOfImportance),
    });
  }
  toggleMode(): void {
    this.currentMode =
      this.currentMode === VIEW_MODE.EDIT ? VIEW_MODE.READ : VIEW_MODE.EDIT;
  }
  saveChanges() {
    this.itemService.updateTask(this.item).subscribe((response) => {
      this.toggleMode();
    });
  }
  cancel(){
    this.toggleMode();
    this.initializeForm();
  }
  changeDate(){
    this.router.navigateByUrl('profile/date-picker');
  }
}
