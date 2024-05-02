/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addExperience } from '../fn/experience-controller/add-experience';
import { AddExperience$Params } from '../fn/experience-controller/add-experience';
import { deleteExperience } from '../fn/experience-controller/delete-experience';
import { DeleteExperience$Params } from '../fn/experience-controller/delete-experience';
import { ExperienceDto } from '../models/experience-dto';
import { getExperience } from '../fn/experience-controller/get-experience';
import { GetExperience$Params } from '../fn/experience-controller/get-experience';
import { getExperiences } from '../fn/experience-controller/get-experiences';
import { GetExperiences$Params } from '../fn/experience-controller/get-experiences';
import { updateExperience } from '../fn/experience-controller/update-experience';
import { UpdateExperience$Params } from '../fn/experience-controller/update-experience';

@Injectable({ providedIn: 'root' })
export class ExperienceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getExperience()` */
  static readonly GetExperiencePath = '/api/v1/experiences/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getExperience()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExperience$Response(params: GetExperience$Params, context?: HttpContext): Observable<StrictHttpResponse<ExperienceDto>> {
    return getExperience(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getExperience$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExperience(params: GetExperience$Params, context?: HttpContext): Observable<ExperienceDto> {
    return this.getExperience$Response(params, context).pipe(
      map((r: StrictHttpResponse<ExperienceDto>): ExperienceDto => r.body)
    );
  }

  /** Path part for operation `updateExperience()` */
  static readonly UpdateExperiencePath = '/api/v1/experiences/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateExperience()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateExperience$Response(params: UpdateExperience$Params, context?: HttpContext): Observable<StrictHttpResponse<ExperienceDto>> {
    return updateExperience(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateExperience$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateExperience(params: UpdateExperience$Params, context?: HttpContext): Observable<ExperienceDto> {
    return this.updateExperience$Response(params, context).pipe(
      map((r: StrictHttpResponse<ExperienceDto>): ExperienceDto => r.body)
    );
  }

  /** Path part for operation `deleteExperience()` */
  static readonly DeleteExperiencePath = '/api/v1/experiences/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteExperience()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteExperience$Response(params: DeleteExperience$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteExperience(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteExperience$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteExperience(params: DeleteExperience$Params, context?: HttpContext): Observable<string> {
    return this.deleteExperience$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getExperiences()` */
  static readonly GetExperiencesPath = '/api/v1/experiences/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getExperiences()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExperiences$Response(params?: GetExperiences$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ExperienceDto>>> {
    return getExperiences(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getExperiences$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExperiences(params?: GetExperiences$Params, context?: HttpContext): Observable<Array<ExperienceDto>> {
    return this.getExperiences$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ExperienceDto>>): Array<ExperienceDto> => r.body)
    );
  }

  /** Path part for operation `addExperience()` */
  static readonly AddExperiencePath = '/api/v1/experiences/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addExperience()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addExperience$Response(params: AddExperience$Params, context?: HttpContext): Observable<StrictHttpResponse<ExperienceDto>> {
    return addExperience(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addExperience$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addExperience(params: AddExperience$Params, context?: HttpContext): Observable<ExperienceDto> {
    return this.addExperience$Response(params, context).pipe(
      map((r: StrictHttpResponse<ExperienceDto>): ExperienceDto => r.body)
    );
  }

}
