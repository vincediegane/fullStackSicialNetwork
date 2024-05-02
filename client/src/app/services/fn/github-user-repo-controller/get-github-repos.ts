/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetGithubRepos$Params {
  username: string;
}

export function getGithubRepos(http: HttpClient, rootUrl: string, params: GetGithubRepos$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
  const rb = new RequestBuilder(rootUrl, getGithubRepos.PATH, 'get');
  if (params) {
    rb.path('username', params.username, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<{
      }>>;
    })
  );
}

getGithubRepos.PATH = '/api/v1/github/{username}';
