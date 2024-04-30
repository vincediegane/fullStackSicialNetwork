/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EducationDto } from '../../models/education-dto';

export interface GetEducation$Params {
  id: number;
}

export function getEducation(http: HttpClient, rootUrl: string, params: GetEducation$Params, context?: HttpContext): Observable<StrictHttpResponse<EducationDto>> {
  const rb = new RequestBuilder(rootUrl, getEducation.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EducationDto>;
    })
  );
}

getEducation.PATH = '/educations/{id}';
