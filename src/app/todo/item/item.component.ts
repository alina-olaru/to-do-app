import { ItemService } from './../item-list/item.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item, TASK_STATE } from 'src/app/login/models/item';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item = new Item();
  TASK_STATE = TASK_STATE;
  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit(): void {}

  toDetails(): void {
    this.router.navigateByUrl('profile/item/' + this.item.id);
  }
  updateState(event:MatCheckboxChange): void{
    const newState = (event.checked === true) ? TASK_STATE.DONE : TASK_STATE.NOT_DONE;
    this.itemService.markTaskAsDone(this.item.id || -1,newState).subscribe(el=>{
      console.log(el);
    })
  }
  removeItem(){
this.itemService.removeTask(this.item.id || -1).subscribe(el=>{

})
  }
}
