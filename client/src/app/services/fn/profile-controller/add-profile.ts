/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProfileDto } from '../../models/profile-dto';

export interface AddProfile$Params {
      body: ProfileDto
}

export function addProfile(http: HttpClient, rootUrl: string, params: AddProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileDto>> {
  const rb = new RequestBuilder(rootUrl, addProfile.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProfileDto>;
    })
  );
}

addProfile.PATH = '/profiles/';
