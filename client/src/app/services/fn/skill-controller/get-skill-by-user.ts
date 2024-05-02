/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SkillDto } from '../../models/skill-dto';

export interface GetSkillByUser$Params {
  userId: number;
}

export function getSkillByUser(http: HttpClient, rootUrl: string, params: GetSkillByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SkillDto>>> {
  const rb = new RequestBuilder(rootUrl, getSkillByUser.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SkillDto>>;
    })
  );
}

getSkillByUser.PATH = '/api/v1/skills/user/{userId}';
