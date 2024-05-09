import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { AuthGuard } from 'src/app/services/guard/auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profiles/:id/details', component: ProfileDetailsComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard], },
  { path: 'posts/:id/details', component: PostDetailsComponent, canActivate: [AuthGuard], }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
