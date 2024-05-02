import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { ProfileTopComponent } from './components/profile-top/profile-top.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';
import { ProfileExperienceComponent } from './components/profile-experience/profile-experience.component';
import { ProfileEducationComponent } from './components/profile-education/profile-education.component';
import { ProfileGithubComponent } from './components/profile-github/profile-github.component';


@NgModule({
  declarations: [
    MainComponent,
    ProfilesComponent,
    ProfileItemComponent,
    ProfileDetailsComponent,
    ProfileTopComponent,
    ProfileAboutComponent,
    ProfileExperienceComponent,
    ProfileEducationComponent,
    ProfileGithubComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
