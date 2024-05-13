/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostDto } from '../../models/post-dto';

export interface GetAllPost$Params {
}

export function getAllPost(http: HttpClient, rootUrl: string, params?: GetAllPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllPost.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PostDto>>;
    })
  );
}

getAllPost.PATH = '/api/v1/posts/';
