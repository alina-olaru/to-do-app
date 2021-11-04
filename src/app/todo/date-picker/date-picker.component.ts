import { FormControl } from '@ngneat/reactive-forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  date = new FormControl<Date>(new Date());
  // TODO foloseste akita sa ai la nivel global asta
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigateByUrl('profile/items');
  }
  saveChanges(){
    this.router.navigateByUrl('profile/items');
  }
}
