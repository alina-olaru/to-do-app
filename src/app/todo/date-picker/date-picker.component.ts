import { FormControl } from '@ngneat/reactive-forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStore } from 'src/app/state/global-state/global-store';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  today = new Date();
  date = new FormControl<Date>(new Date());
  // TODO foloseste akita sa ai la nivel global asta
  constructor(private router: Router, private globalStore: GlobalStore) {}

  ngOnInit(): void {
    this.date.valueChanges.subscribe(el=>{
      console.log(el);
      console.log(this.date.errors);
    })
  }

  cancel() {
    this.router.navigateByUrl('profile/items');
  }
  saveChanges() {
    console.log(this.date.value);
    this.globalStore.update({ chosenDate: this.date.value });
    this.router.navigateByUrl('profile/items');
  }
}
