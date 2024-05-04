/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EducationDto } from '../../models/education-dto';

export interface GetProfileEducations$Params {
  profileId: number;
}

export function getProfileEducations(http: HttpClient, rootUrl: string, params: GetProfileEducations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EducationDto>>> {
  const rb = new RequestBuilder(rootUrl, getProfileEducations.PATH, 'get');
  if (params) {
    rb.path('profileId', params.profileId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EducationDto>>;
    })
  );
}

getProfileEducations.PATH = '/api/v1/educations/profile/{profileId}';
