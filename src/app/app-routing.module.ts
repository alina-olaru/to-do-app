import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { RoleGuard } from './guards/role-guard.service';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/login/login.module').then((m) => m.LoginModule),


  },
  {
    path: 'profile',
    loadChildren: () =>
      import('src/app/todo/todo.module').then((m) => m.TodoModule),
      canLoad:[AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('src/app/admin/admin.module').then((m) => m.AdminModule),
      canLoad:[AuthGuard, RoleGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
