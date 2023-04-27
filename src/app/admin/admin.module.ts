import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    UsersComponent,
    AdminsComponent,
    AboutComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
