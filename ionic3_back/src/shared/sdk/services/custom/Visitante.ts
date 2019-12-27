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
import { Visitante } from '../../models/Visitante';
import { SocketConnection } from '../../sockets/socket.connections';



/**
 * Api services for the `Visitante` model.
 */
@Injectable()
export class VisitanteApi extends BaseLoopBackApi {

  private static pathValidador : string = '//validacao.kinghost.net:21040';

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  



  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @param {object} data Request data.
   *
   *  - `data` ? `{object}` - Model instance data
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Visitante` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = VisitanteApi.pathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/Visitantes";
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
   * @param {any} id Visitante id
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
   * This usually means the response is a `Visitante` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = VisitanteApi.pathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/Visitantes/:id";
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
   * retorna o proximo cookie
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `codigoCookie` ? `{string}` - proximo cookie
   */
  public proximoCookie(customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = VisitanteApi.pathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/Visitantes/proximoCookie";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }


  public criaItem(data: Visitante, customHeaders?: Function): Observable<Visitante> {
    return this.request('POST', [
      VisitanteApi.pathValidador,
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().path
    ].join('/'), undefined, undefined, { data }, null, customHeaders)
    .pipe(map((data: Visitante) => this.model.factory(data)));
  }
  public atualizaItem(id: any, data: Visitante, customHeaders?: Function): Observable<Visitante> {
    return this.request('PUT', [
      VisitanteApi.pathValidador,
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().path,
      ':id'
    ].join('/'), { id }, undefined, { data }, null, customHeaders)
    .pipe(map((data: Visitante) => this.model.factory(data)));
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `Visitante`.
   */
  public getModelName() {
    return "Visitante";
  }
}
