import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { ItemComponent } from './item/item.component';
import { LevelOfImportancePipe } from './item/level-of-importance.pipe';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { RecurrencyPipe } from './item-detail/recurrency.pipe';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsContainerComponent,
  },
  {
    path: 'add-item',
    component: AddItemComponent,
  },
  {
    path: 'date-picker',
    component: DatePickerComponent,
  },
  {
    path: 'item/:id',
    component: ItemDetailComponent,
  },
  {
    path: '',
    redirectTo: 'items',
  },
];

@NgModule({
  declarations: [
    ItemListComponent,
    ItemsContainerComponent,
    ItemComponent,
    LevelOfImportancePipe,
    ItemDetailComponent,
    RecurrencyPipe,
    DatePickerComponent,
    EditItemComponent,
    AddItemComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [


  ],
})
export class TodoModule {}
