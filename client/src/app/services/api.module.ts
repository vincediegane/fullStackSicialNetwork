/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ProfileControllerService } from './services/profile-controller.service';
import { ExperienceControllerService } from './services/experience-controller.service';
import { EducationControllerService } from './services/education-controller.service';
import { PostRestControllerService } from './services/post-rest-controller.service';
import { CommentControllerService } from './services/comment-controller.service';
import { AuthApiService } from './services/auth-api.service';
import { LikeControllerService } from './services/like-controller.service';
import { GithubUserRepoControllerService } from './services/github-user-repo-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ProfileControllerService,
    ExperienceControllerService,
    EducationControllerService,
    PostRestControllerService,
    CommentControllerService,
    AuthApiService,
    LikeControllerService,
    GithubUserRepoControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
