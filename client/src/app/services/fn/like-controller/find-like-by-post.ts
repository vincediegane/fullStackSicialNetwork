/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LikeDto } from '../../models/like-dto';

export interface FindLikeByPost$Params {
  postId: number;
}

export function findLikeByPost(http: HttpClient, rootUrl: string, params: FindLikeByPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LikeDto>>> {
  const rb = new RequestBuilder(rootUrl, findLikeByPost.PATH, 'get');
  if (params) {
    rb.path('postId', params.postId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LikeDto>>;
    })
  );
}

findLikeByPost.PATH = '/likes/post/{postId}';
