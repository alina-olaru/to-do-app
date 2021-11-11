import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlsOf, FormGroup } from '@ngneat/reactive-forms';
import { Item, ItemModel } from 'src/app/login/models/item';
import { ItemService } from '../item-list/item.service';
import { EDIT_STATE } from '../state/todos.model';
import { TodosStore } from '../state/todos.store';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  item = new Item();

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private todosStore:TodosStore
  ) {}

  ngOnInit(): void {}
  cancel() {
    this.router.navigateByUrl('profile/items');
  }
  save(form:FormGroup<ControlsOf<ItemModel>>) {
    console.log(form.value);
    //map to create item
    this.itemService.addTask(this.item).subscribe(el=>{
      this.router.navigateByUrl('profile/items');
      this.todosStore.updateEditingState(EDIT_STATE.NOT_EDITING);
    })

  }
}
