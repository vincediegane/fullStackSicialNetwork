import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profiles/:id/details', component: ProfileDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
