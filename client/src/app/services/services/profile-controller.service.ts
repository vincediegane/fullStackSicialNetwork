/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addProfile } from '../fn/profile-controller/add-profile';
import { AddProfile$Params } from '../fn/profile-controller/add-profile';
import { deleteProfile } from '../fn/profile-controller/delete-profile';
import { DeleteProfile$Params } from '../fn/profile-controller/delete-profile';
import { getCurrentProfile } from '../fn/profile-controller/get-current-profile';
import { GetCurrentProfile$Params } from '../fn/profile-controller/get-current-profile';
import { getProfile } from '../fn/profile-controller/get-profile';
import { GetProfile$Params } from '../fn/profile-controller/get-profile';
import { getProfiles } from '../fn/profile-controller/get-profiles';
import { GetProfiles$Params } from '../fn/profile-controller/get-profiles';
import { getUserProfile } from '../fn/profile-controller/get-user-profile';
import { GetUserProfile$Params } from '../fn/profile-controller/get-user-profile';
import { ProfileDto } from '../models/profile-dto';
import { updateProfile } from '../fn/profile-controller/update-profile';
import { UpdateProfile$Params } from '../fn/profile-controller/update-profile';

@Injectable({ providedIn: 'root' })
export class ProfileControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateProfile()` */
  static readonly UpdateProfilePath = '/api/v1/profiles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfile$Response(params: UpdateProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileDto>> {
    return updateProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfile(params: UpdateProfile$Params, context?: HttpContext): Observable<ProfileDto> {
    return this.updateProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProfileDto>): ProfileDto => r.body)
    );
  }

  /** Path part for operation `deleteProfile()` */
  static readonly DeleteProfilePath = '/api/v1/profiles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProfile$Response(params: DeleteProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProfile(params: DeleteProfile$Params, context?: HttpContext): Observable<string> {
    return this.deleteProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getProfiles()` */
  static readonly GetProfilesPath = '/api/v1/profiles/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfiles$Response(params?: GetProfiles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProfileDto>>> {
    return getProfiles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfiles(params?: GetProfiles$Params, context?: HttpContext): Observable<Array<ProfileDto>> {
    return this.getProfiles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProfileDto>>): Array<ProfileDto> => r.body)
    );
  }

  /** Path part for operation `addProfile()` */
  static readonly AddProfilePath = '/api/v1/profiles/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProfile$Response(params: AddProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileDto>> {
    return addProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProfile(params: AddProfile$Params, context?: HttpContext): Observable<ProfileDto> {
    return this.addProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProfileDto>): ProfileDto => r.body)
    );
  }

  /** Path part for operation `getUserProfile()` */
  static readonly GetUserProfilePath = '/api/v1/profiles/users/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile$Response(params: GetUserProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileDto>> {
    return getUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile(params: GetUserProfile$Params, context?: HttpContext): Observable<ProfileDto> {
    return this.getUserProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProfileDto>): ProfileDto => r.body)
    );
  }

  /** Path part for operation `getCurrentProfile()` */
  static readonly GetCurrentProfilePath = '/api/v1/profiles/me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentProfile$Response(params?: GetCurrentProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileDto>> {
    return getCurrentProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentProfile(params?: GetCurrentProfile$Params, context?: HttpContext): Observable<ProfileDto> {
    return this.getCurrentProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProfileDto>): ProfileDto => r.body)
    );
  }

  /** Path part for operation `getProfile()` */
  static readonly GetProfilePath = '/api/v1/profiles/byId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Response(params: GetProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileDto>> {
    return getProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile(params: GetProfile$Params, context?: HttpContext): Observable<ProfileDto> {
    return this.getProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProfileDto>): ProfileDto => r.body)
    );
  }

}
