import { PasswordModel } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlsOf, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { SignUpModel } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup<ControlsOf<SignUpModel>>({
    username: new FormControl('', [Validators.required,
    Validators.minLength(4)]),
    emailAddress: new FormControl('', [Validators.required,Validators.email]),
    pass: new FormGroup<ControlsOf<PasswordModel>>(
      {
        password: new FormControl(
          '',
         [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ]
        ),
        confirmPassword: new FormControl('',  [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ]),
      },

    ),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirectToSignIn() {
    this.router.navigateByUrl('login/sign-in');
  }
  register(){}
}
