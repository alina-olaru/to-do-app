import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgPipesModule } from 'ngx-pipes';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import dayjs from 'dayjs';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: (error) => 'This field is required.',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect minimum ${requiredLength} characters, but got ${actualLength}.`,
          maxlength: ({ requiredLength, actualLength }) =>
            `Expect maximum ${requiredLength} characters, but got ${actualLength}.`,
          email: (error) => `Invalid email address.`,
          matDatepickerMin: ({ actual, min }) => {
            const day = dayjs(min).format('DD-MM-YYYY');
            return `Choosen date should be at least ${day}`;
          },
        },
      },
    }),
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    NgPipesModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorTailorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    NgPipesModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
})
export class SharedModule {}
