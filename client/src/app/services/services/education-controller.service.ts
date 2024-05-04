/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addEducation } from '../fn/education-controller/add-education';
import { AddEducation$Params } from '../fn/education-controller/add-education';
import { deleteEducation } from '../fn/education-controller/delete-education';
import { DeleteEducation$Params } from '../fn/education-controller/delete-education';
import { EducationDto } from '../models/education-dto';
import { getEducation } from '../fn/education-controller/get-education';
import { GetEducation$Params } from '../fn/education-controller/get-education';
import { getEducations } from '../fn/education-controller/get-educations';
import { GetEducations$Params } from '../fn/education-controller/get-educations';
import { getProfileEducations } from '../fn/education-controller/get-profile-educations';
import { GetProfileEducations$Params } from '../fn/education-controller/get-profile-educations';
import { updateEducation } from '../fn/education-controller/update-education';
import { UpdateEducation$Params } from '../fn/education-controller/update-education';

@Injectable({ providedIn: 'root' })
export class EducationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getEducation()` */
  static readonly GetEducationPath = '/api/v1/educations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEducation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEducation$Response(params: GetEducation$Params, context?: HttpContext): Observable<StrictHttpResponse<EducationDto>> {
    return getEducation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEducation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEducation(params: GetEducation$Params, context?: HttpContext): Observable<EducationDto> {
    return this.getEducation$Response(params, context).pipe(
      map((r: StrictHttpResponse<EducationDto>): EducationDto => r.body)
    );
  }

  /** Path part for operation `updateEducation()` */
  static readonly UpdateEducationPath = '/api/v1/educations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEducation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEducation$Response(params: UpdateEducation$Params, context?: HttpContext): Observable<StrictHttpResponse<EducationDto>> {
    return updateEducation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEducation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEducation(params: UpdateEducation$Params, context?: HttpContext): Observable<EducationDto> {
    return this.updateEducation$Response(params, context).pipe(
      map((r: StrictHttpResponse<EducationDto>): EducationDto => r.body)
    );
  }

  /** Path part for operation `deleteEducation()` */
  static readonly DeleteEducationPath = '/api/v1/educations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEducation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEducation$Response(params: DeleteEducation$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteEducation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEducation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEducation(params: DeleteEducation$Params, context?: HttpContext): Observable<string> {
    return this.deleteEducation$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getEducations()` */
  static readonly GetEducationsPath = '/api/v1/educations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEducations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEducations$Response(params?: GetEducations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EducationDto>>> {
    return getEducations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEducations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEducations(params?: GetEducations$Params, context?: HttpContext): Observable<Array<EducationDto>> {
    return this.getEducations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EducationDto>>): Array<EducationDto> => r.body)
    );
  }

  /** Path part for operation `addEducation()` */
  static readonly AddEducationPath = '/api/v1/educations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addEducation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addEducation$Response(params: AddEducation$Params, context?: HttpContext): Observable<StrictHttpResponse<EducationDto>> {
    return addEducation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addEducation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addEducation(params: AddEducation$Params, context?: HttpContext): Observable<EducationDto> {
    return this.addEducation$Response(params, context).pipe(
      map((r: StrictHttpResponse<EducationDto>): EducationDto => r.body)
    );
  }

  /** Path part for operation `getProfileEducations()` */
  static readonly GetProfileEducationsPath = '/api/v1/educations/profile/{profileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfileEducations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileEducations$Response(params: GetProfileEducations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EducationDto>>> {
    return getProfileEducations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfileEducations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileEducations(params: GetProfileEducations$Params, context?: HttpContext): Observable<Array<EducationDto>> {
    return this.getProfileEducations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EducationDto>>): Array<EducationDto> => r.body)
    );
  }

}
