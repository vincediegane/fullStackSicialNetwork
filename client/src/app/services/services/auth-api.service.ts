/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticate } from '../fn/auth-api/authenticate';
import { Authenticate$Params } from '../fn/auth-api/authenticate';
import { AuthResponseDto } from '../models/auth-response-dto';
import { getCurrentUser } from '../fn/auth-api/get-current-user';
import { GetCurrentUser$Params } from '../fn/auth-api/get-current-user';
import { register } from '../fn/auth-api/register';
import { Register$Params } from '../fn/auth-api/register';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class AuthApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/api/v1/auth/register';

  /**
   * This is a summary for registering a user endpoint.
   *
   * Post endpoint for registering a user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthResponseDto>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * This is a summary for registering a user endpoint.
   *
   * Post endpoint for registering a user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<AuthResponseDto> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthResponseDto>): AuthResponseDto => r.body)
    );
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = '/api/v1/auth/authenticate';

  /**
   * This is a summary for authenticate a user endpoint.
   *
   * Post endpoint for authenticate a user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthResponseDto>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * This is a summary for authenticate a user endpoint.
   *
   * Post endpoint for authenticate a user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params: Authenticate$Params, context?: HttpContext): Observable<AuthResponseDto> {
    return this.authenticate$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthResponseDto>): AuthResponseDto => r.body)
    );
  }

  /** Path part for operation `getCurrentUser()` */
  static readonly GetCurrentUserPath = '/api/v1/auth/me';

  /**
   * This is a summary for getting a user information endpoint.
   *
   * Get endpoint to load user information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUser$Response(params?: GetCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return getCurrentUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This is a summary for getting a user information endpoint.
   *
   * Get endpoint to load user information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUser(params?: GetCurrentUser$Params, context?: HttpContext): Observable<UserDto> {
    return this.getCurrentUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

}
