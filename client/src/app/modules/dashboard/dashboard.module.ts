import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { ProfileExperienceComponent } from './components/profile-experience/profile-experience.component';
import { ProfileEducationComponent } from './components/profile-education/profile-education.component';


@NgModule({
  declarations: [
    MainComponent,
    ProfilesComponent,
    ProfileItemComponent,
    ProfileDetailsComponent,
    ProfileExperienceComponent,
    ProfileEducationComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
