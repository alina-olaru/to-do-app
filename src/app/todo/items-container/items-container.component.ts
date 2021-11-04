import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/login/models/item';
import { ItemService } from '../item-list/item.service';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {
  private _items = new BehaviorSubject<Item[]>([]);
  items$ = this._items.asObservable();

  constructor(private itemsService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems():void{
    this.itemsService.getItems().subscribe(el=>{
      this._items.next(el);
    })
  }
}
