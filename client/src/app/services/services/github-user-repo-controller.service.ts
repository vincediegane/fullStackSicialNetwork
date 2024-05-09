/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getGithubRepos } from '../fn/github-user-repo-controller/get-github-repos';
import { GetGithubRepos$Params } from '../fn/github-user-repo-controller/get-github-repos';
import { getGravatarUrl } from '../fn/github-user-repo-controller/get-gravatar-url';
import { GetGravatarUrl$Params } from '../fn/github-user-repo-controller/get-gravatar-url';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GithubUserRepoControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  get defaultAvatarUrl() {
    return environment.defaultAvatar;
  }

  /** Path part for operation `getGithubRepos()` */
  static readonly GetGithubReposPath = '/api/v1/github/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGithubRepos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGithubRepos$Response(
    params: GetGithubRepos$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{}>>> {
    return getGithubRepos(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGithubRepos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGithubRepos(
    params: GetGithubRepos$Params,
    context?: HttpContext
  ): Observable<Array<{}>> {
    return this.getGithubRepos$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{}>>): Array<{}> => r.body)
    );
  }

  /** Path part for operation `getGravatarUrl()` */
  static readonly GetGravatarUrlPath = '/api/v1/github/gravatar/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGravatarUrl()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGravatarUrl$Response(
    params: GetGravatarUrl$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    return getGravatarUrl(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGravatarUrl$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGravatarUrl(
    params: GetGravatarUrl$Params,
    context?: HttpContext
  ): Observable<string> {
    return this.getGravatarUrl$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }
}
