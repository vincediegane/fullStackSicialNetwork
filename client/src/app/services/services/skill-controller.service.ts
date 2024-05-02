/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addSkill } from '../fn/skill-controller/add-skill';
import { AddSkill$Params } from '../fn/skill-controller/add-skill';
import { deleteSkill } from '../fn/skill-controller/delete-skill';
import { DeleteSkill$Params } from '../fn/skill-controller/delete-skill';
import { getSkill } from '../fn/skill-controller/get-skill';
import { GetSkill$Params } from '../fn/skill-controller/get-skill';
import { getSkillByUser } from '../fn/skill-controller/get-skill-by-user';
import { GetSkillByUser$Params } from '../fn/skill-controller/get-skill-by-user';
import { getSkills } from '../fn/skill-controller/get-skills';
import { GetSkills$Params } from '../fn/skill-controller/get-skills';
import { SkillDto } from '../models/skill-dto';
import { updateSkill } from '../fn/skill-controller/update-skill';
import { UpdateSkill$Params } from '../fn/skill-controller/update-skill';

@Injectable({ providedIn: 'root' })
export class SkillControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getSkill()` */
  static readonly GetSkillPath = '/api/v1/skills/{skillId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkill()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkill$Response(params: GetSkill$Params, context?: HttpContext): Observable<StrictHttpResponse<SkillDto>> {
    return getSkill(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSkill$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkill(params: GetSkill$Params, context?: HttpContext): Observable<SkillDto> {
    return this.getSkill$Response(params, context).pipe(
      map((r: StrictHttpResponse<SkillDto>): SkillDto => r.body)
    );
  }

  /** Path part for operation `updateSkill()` */
  static readonly UpdateSkillPath = '/api/v1/skills/{skillId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSkill()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSkill$Response(params: UpdateSkill$Params, context?: HttpContext): Observable<StrictHttpResponse<SkillDto>> {
    return updateSkill(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSkill$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSkill(params: UpdateSkill$Params, context?: HttpContext): Observable<SkillDto> {
    return this.updateSkill$Response(params, context).pipe(
      map((r: StrictHttpResponse<SkillDto>): SkillDto => r.body)
    );
  }

  /** Path part for operation `deleteSkill()` */
  static readonly DeleteSkillPath = '/api/v1/skills/{skillId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSkill()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSkill$Response(params: DeleteSkill$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteSkill(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSkill$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSkill(params: DeleteSkill$Params, context?: HttpContext): Observable<string> {
    return this.deleteSkill$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addSkill()` */
  static readonly AddSkillPath = '/api/v1/skills/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addSkill()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSkill$Response(params: AddSkill$Params, context?: HttpContext): Observable<StrictHttpResponse<SkillDto>> {
    return addSkill(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addSkill$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSkill(params: AddSkill$Params, context?: HttpContext): Observable<SkillDto> {
    return this.addSkill$Response(params, context).pipe(
      map((r: StrictHttpResponse<SkillDto>): SkillDto => r.body)
    );
  }

  /** Path part for operation `getSkillByUser()` */
  static readonly GetSkillByUserPath = '/api/v1/skills/user/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkillByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillByUser$Response(params: GetSkillByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SkillDto>>> {
    return getSkillByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSkillByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillByUser(params: GetSkillByUser$Params, context?: HttpContext): Observable<Array<SkillDto>> {
    return this.getSkillByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SkillDto>>): Array<SkillDto> => r.body)
    );
  }

  /** Path part for operation `getSkills()` */
  static readonly GetSkillsPath = '/api/v1/skills/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkills()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkills$Response(params?: GetSkills$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SkillDto>>> {
    return getSkills(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSkills$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkills(params?: GetSkills$Params, context?: HttpContext): Observable<Array<SkillDto>> {
    return this.getSkills$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SkillDto>>): Array<SkillDto> => r.body)
    );
  }

}
