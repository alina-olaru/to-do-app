import { SessionQuery } from '../../state/auth-state/session-query';
import { Observable } from 'rxjs';
import { ItemService } from './item.service';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/login/models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  constructor(private router: Router, private sessionQuery: SessionQuery) {
    this.sessionQuery.currentUser$.subscribe(el=>{
      console.log(el);
    })
  }
  @Input() items: Observable<Item[]> = new Observable();
  // save(){}
  changeDate() {
    this.router.navigateByUrl('profile/date-picker');
  }
}
