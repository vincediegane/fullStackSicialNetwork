/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProfileDto } from '../../models/profile-dto';

export interface GetUserProfile$Params {
  userId: number;
}

export function getUserProfile(http: HttpClient, rootUrl: string, params: GetUserProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileDto>> {
  const rb = new RequestBuilder(rootUrl, getUserProfile.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProfileDto>;
    })
  );
}

getUserProfile.PATH = '/api/v1/profiles/users/{userId}';
