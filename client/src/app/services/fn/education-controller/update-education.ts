/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EducationDto } from '../../models/education-dto';

export interface UpdateEducation$Params {
  id: number;
      body: EducationDto
}

export function updateEducation(http: HttpClient, rootUrl: string, params: UpdateEducation$Params, context?: HttpContext): Observable<StrictHttpResponse<EducationDto>> {
  const rb = new RequestBuilder(rootUrl, updateEducation.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

updateEducation.PATH = '/api/v1/educations/{id}';
