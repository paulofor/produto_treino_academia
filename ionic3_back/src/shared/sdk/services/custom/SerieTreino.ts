
/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SerieTreino } from '../../models/SerieTreino';
import { SocketConnection } from '../../sockets/socket.connections';
import { SERIETREINO } from '../../../../dados/serieTreino';
//import { of } from 'rxjs';
//Versao Ionic
import { of } from 'rxjs/observable/of';
import {SERIETREINO_LISTASERIETREINOPAGE} from  '../../../../dados/serieTreino';
/**
 * Api services for the `Aplicacao` model.
 */
@Injectable()
export class SerieTreinoApi extends BaseLoopBackApi {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/serieTreinos";
    let _routeParams: any = {};
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param {any} id aplicacao id
   *
   * @param {object} data Request data.
   *
   *  - `data` ? `{object}` - An object of model property name/value pairs
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Aplicacao` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/serieTreinos/:id";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `Aplicacao`.
   */
  public getModelName() {
    return "SerieTreino";
  }
  
  obtemPrimeiro(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<SerieTreino> {
    return of(SERIETREINO[0]);
  }
  obtemLista(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<SerieTreino[]> {
    return of(SERIETREINO);
  }
  obtemElemento(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<SerieTreino> {
    return of(SERIETREINO[filter.where.id]);
  }

	getListaSerieTreinoPageLoad(filter: LoopBackFilter = {}) : Observable<SerieTreino> {
		return of (SERIETREINO_LISTASERIETREINOPAGE);
	}
  
}