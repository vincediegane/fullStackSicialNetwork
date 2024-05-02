/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SkillDto } from '../../models/skill-dto';

export interface AddSkill$Params {
      body: SkillDto
}

export function addSkill(http: HttpClient, rootUrl: string, params: AddSkill$Params, context?: HttpContext): Observable<StrictHttpResponse<SkillDto>> {
  const rb = new RequestBuilder(rootUrl, addSkill.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SkillDto>;
    })
  );
}

addSkill.PATH = '/api/v1/skills/add';
