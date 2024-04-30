/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addComment } from '../fn/comment-controller/add-comment';
import { AddComment$Params } from '../fn/comment-controller/add-comment';
import { CommentDto } from '../models/comment-dto';
import { deleteComment } from '../fn/comment-controller/delete-comment';
import { DeleteComment$Params } from '../fn/comment-controller/delete-comment';
import { findAll1 } from '../fn/comment-controller/find-all-1';
import { FindAll1$Params } from '../fn/comment-controller/find-all-1';
import { getComment } from '../fn/comment-controller/get-comment';
import { GetComment$Params } from '../fn/comment-controller/get-comment';
import { getCommentsByPost } from '../fn/comment-controller/get-comments-by-post';
import { GetCommentsByPost$Params } from '../fn/comment-controller/get-comments-by-post';

@Injectable({ providedIn: 'root' })
export class CommentControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/comments/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<CommentDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommentDto>>): Array<CommentDto> => r.body)
    );
  }

  /** Path part for operation `addComment()` */
  static readonly AddCommentPath = '/comments/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addComment$Response(params: AddComment$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDto>> {
    return addComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addComment(params: AddComment$Params, context?: HttpContext): Observable<CommentDto> {
    return this.addComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommentDto>): CommentDto => r.body)
    );
  }

  /** Path part for operation `getComment()` */
  static readonly GetCommentPath = '/comments/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  getComment$Response(params: GetComment$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDto>> {
    return getComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getComment(params: GetComment$Params, context?: HttpContext): Observable<CommentDto> {
    return this.getComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommentDto>): CommentDto => r.body)
    );
  }

  /** Path part for operation `getCommentsByPost()` */
  static readonly GetCommentsByPostPath = '/comments/posts/{postId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsByPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPost$Response(params: GetCommentsByPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentDto>>> {
    return getCommentsByPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentsByPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPost(params: GetCommentsByPost$Params, context?: HttpContext): Observable<Array<CommentDto>> {
    return this.getCommentsByPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommentDto>>): Array<CommentDto> => r.body)
    );
  }

  /** Path part for operation `deleteComment()` */
  static readonly DeleteCommentPath = '/comments/{commentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment$Response(params: DeleteComment$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment(params: DeleteComment$Params, context?: HttpContext): Observable<string> {
    return this.deleteComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
