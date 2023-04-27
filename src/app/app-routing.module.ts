import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminauthGuard } from './shared/adminauth.guard';

const routes: Routes = [
  {path:'', component: LoginComponent, pathMatch:'full'},
  {path:'admin', canActivate:[AdminauthGuard], loadChildren:()=>import('./admin/admin.module').then((m=>m.AdminModule))},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
