/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EducationDto } from '../../models/education-dto';

export interface AddEducation$Params {
      body: EducationDto
}

export function addEducation(http: HttpClient, rootUrl: string, params: AddEducation$Params, context?: HttpContext): Observable<StrictHttpResponse<EducationDto>> {
  const rb = new RequestBuilder(rootUrl, addEducation.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EducationDto>;
    })
  );
}

addEducation.PATH = '/api/v1/educations/';
