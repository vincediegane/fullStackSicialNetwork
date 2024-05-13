/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostDto } from '../../models/post-dto';
import { PostRequestDto } from '../../models/post-request-dto';

export interface AddPost$Params {
      body: PostRequestDto
}

export function addPost(http: HttpClient, rootUrl: string, params: AddPost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
  const rb = new RequestBuilder(rootUrl, addPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PostDto>;
    })
  );
}

addPost.PATH = '/api/v1/posts/';
