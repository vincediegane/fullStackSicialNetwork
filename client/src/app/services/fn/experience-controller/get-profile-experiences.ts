/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExperienceDto } from '../../models/experience-dto';

export interface GetProfileExperiences$Params {
  profileId: number;
}

export function getProfileExperiences(http: HttpClient, rootUrl: string, params: GetProfileExperiences$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ExperienceDto>>> {
  const rb = new RequestBuilder(rootUrl, getProfileExperiences.PATH, 'get');
  if (params) {
    rb.path('profileId', params.profileId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ExperienceDto>>;
    })
  );
}

getProfileExperiences.PATH = '/api/v1/experiences/profile/{profileId}';
