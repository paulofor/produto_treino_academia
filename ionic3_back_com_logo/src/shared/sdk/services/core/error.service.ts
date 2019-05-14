/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
import { Observable } from 'rxjs';
/**
 * Default error handler
 */
@Injectable()
export class ErrorHandler {
  public handleError(errorResponse: HttpErrorResponse): Observable<never> {
    //return throwError(errorResponse.error.error || 'Server error');
    console.log('ErroHttp: ', errorResponse);
	return null;
  }
}
