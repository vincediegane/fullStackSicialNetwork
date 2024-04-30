/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProfileDto } from '../../models/profile-dto';

export interface GetProfiles$Params {
}

export function getProfiles(http: HttpClient, rootUrl: string, params?: GetProfiles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProfileDto>>> {
  const rb = new RequestBuilder(rootUrl, getProfiles.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProfileDto>>;
    })
  );
}

getProfiles.PATH = '/profiles/';
