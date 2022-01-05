import { ErrorTailorModule } from '@ngneat/error-tailor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [{
  path:'sign-in',
  component:SignInComponent
},
{
  path:'sign-up',
  component:SignUpComponent
},
{
  path:'',
  redirectTo:'sign-in'
}];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),


  ],
  exports:[RouterModule],

})
export class LoginModule { }
