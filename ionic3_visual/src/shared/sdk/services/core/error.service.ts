/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
//import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
/**
 * Default error handler
 */
@Injectable()
export class ErrorHandler {
  public handleError(errorResponse: HttpErrorResponse) {
  	return _throw(errorResponse.error.error || 'Server error');
    //return throwError(errorResponse.error.error || 'Server error');
    //console.log('ErroHttp: ', errorResponse);
	//return null;
  }
}
