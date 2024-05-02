import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';


@NgModule({
  declarations: [
    MainComponent,
    ProfilesComponent,
    ProfileItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
