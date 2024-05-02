/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentDto } from '../../models/comment-dto';

export interface GetCommentsByPost$Params {
  postId: number;
}

export function getCommentsByPost(http: HttpClient, rootUrl: string, params: GetCommentsByPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentDto>>> {
  const rb = new RequestBuilder(rootUrl, getCommentsByPost.PATH, 'get');
  if (params) {
    rb.path('postId', params.postId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CommentDto>>;
    })
  );
}

getCommentsByPost.PATH = '/api/v1/comments/posts/{postId}';
