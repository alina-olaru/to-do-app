import { SignInService } from './sign-in.service';
import { ControlsOf, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Component, OnInit } from '@angular/core';
import { Auth, SigninModel } from '../models/user';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStore } from '../../state/auth-state/session-store';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup<ControlsOf<SigninModel>>({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false),
  });
  constructor(
    private router: Router,
    private signInService: SignInService,
    private sessionStore: SessionStore
  ) {}

  ngOnInit(): void {}

  signIn() {
    console.log(this.signInForm.get('username'));
    const signData: Auth = {
      username: this.signInForm.controls['username'].value,
      password: this.signInForm.controls['password'].value,
    };
    if (this.signInForm.valid) {
      this.signInService.signIn(signData).subscribe((response) => {
        if (this.signInForm.controls['rememberMe'].value) {
          localStorage.setItem('username', 'username');
        }
        this.sessionStore.update((state) => ({ user: response }));
        this.router.navigateByUrl('profile/items');
      });
    }
  }
  forgotPassword() {}
  redirectToSignUp() {
    this.router.navigateByUrl('login/sign-up');
  }
}
