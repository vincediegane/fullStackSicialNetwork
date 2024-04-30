/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExperienceDto } from '../../models/experience-dto';

export interface GetExperience$Params {
  id: number;
}

export function getExperience(http: HttpClient, rootUrl: string, params: GetExperience$Params, context?: HttpContext): Observable<StrictHttpResponse<ExperienceDto>> {
  const rb = new RequestBuilder(rootUrl, getExperience.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ExperienceDto>;
    })
  );
}

getExperience.PATH = '/experiences/{id}';
