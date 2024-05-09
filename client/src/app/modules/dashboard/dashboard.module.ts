import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { ProfileExperienceComponent } from './components/profile-experience/profile-experience.component';
import { ProfileEducationComponent } from './components/profile-education/profile-education.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    ProfilesComponent,
    ProfileItemComponent,
    ProfileDetailsComponent,
    ProfileExperienceComponent,
    ProfileEducationComponent,
    PostsComponent,
    PostItemComponent,
    PostFormComponent,
    PostDetailsComponent,
    CommentFormComponent,
    CommentItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
