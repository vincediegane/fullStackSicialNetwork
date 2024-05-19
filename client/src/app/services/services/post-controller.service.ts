/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addPost } from '../fn/post-controller/add-post';
import { AddPost$Params } from '../fn/post-controller/add-post';
import { getAllPost } from '../fn/post-controller/get-all-post';
import { GetAllPost$Params } from '../fn/post-controller/get-all-post';
import { getPostById } from '../fn/post-controller/get-post-by-id';
import { GetPostById$Params } from '../fn/post-controller/get-post-by-id';
import { PostDto } from '../models/post-dto';
import { updatePost } from '../fn/post-controller/update-post';
import { UpdatePost$Params } from '../fn/post-controller/update-post';

@Injectable({ providedIn: 'root' })
export class PostControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPostById()` */
  static readonly GetPostByIdPath = '/api/v1/posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById$Response(params: GetPostById$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
    return getPostById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById(params: GetPostById$Params, context?: HttpContext): Observable<PostDto> {
    return this.getPostById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostDto>): PostDto => r.body)
    );
  }

  /** Path part for operation `updatePost()` */
  static readonly UpdatePostPath = '/api/v1/posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePost$Response(params: UpdatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
    return updatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePost(params: UpdatePost$Params, context?: HttpContext): Observable<PostDto> {
    return this.updatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostDto>): PostDto => r.body)
    );
  }

  /** Path part for operation `getAllPost()` */
  static readonly GetAllPostPath = '/api/v1/posts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPost$Response(params?: GetAllPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostDto>>> {
    return getAllPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPost(params?: GetAllPost$Params, context?: HttpContext): Observable<Array<PostDto>> {
    return this.getAllPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostDto>>): Array<PostDto> => r.body)
    );
  }

  /** Path part for operation `addPost()` */
  static readonly AddPostPath = '/api/v1/posts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPost$Response(params: AddPost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
    return addPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPost(params: AddPost$Params, context?: HttpContext): Observable<PostDto> {
    return this.addPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostDto>): PostDto => r.body)
    );
  }

}
