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
import { DispositivoUsuario } from '../../models/DispositivoUsuario';
import { SocketConnection } from '../../sockets/socket.connections';
import { PathValidador } from '../../../assinatura';



/**
 * Api services for the `DispositivoUsuario` model.
 */
@Injectable()
export class DispositivoUsuarioApi extends BaseLoopBackApi {



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
   * This usually means the response is a `DispositivoUsuario` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/DispositivoUsuarios";
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
   * @param {any} id DispositivoUsuario id
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
   * This usually means the response is a `DispositivoUsuario` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/DispositivoUsuarios/:id";
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
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/DispositivoUsuarios/proximoCookie";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }


  public criaItem(data: DispositivoUsuario, customHeaders?: Function): Observable<DispositivoUsuario> {
    return this.request('POST', [
      PathValidador,
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().path
    ].join('/'), undefined, undefined, { data }, null, customHeaders)
    .pipe(map((data: DispositivoUsuario) => this.model.factory(data)));
  }

  public findOneItem<DispositivoUsuario>(filter: LoopBackFilter = {}, customHeaders?: Function): Observable<DispositivoUsuario> {
    return this.request('GET', [
      PathValidador,
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().path,
      'findOne'
    ].join('/'), undefined, { filter }, undefined, null, customHeaders)
    .pipe(map((data: DispositivoUsuario) => this.model.factory(data)));
  }

  public atualizaItem(id: any, data: DispositivoUsuario, customHeaders?: Function): Observable<DispositivoUsuario> {
    return this.request('PUT', [
      PathValidador,
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().path,
      ':id'
    ].join('/'), { id }, undefined, { data }, null, customHeaders)
    .pipe(map((data: DispositivoUsuario) => this.model.factory(data)));
  }


  public CriaComUsuario(dispositivo: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/DispositivoUsuarios/criaComUsuario";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof dispositivo !== 'undefined' && dispositivo !== null) _urlParams.dispositivo = dispositivo;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }
  
  
  public AtualizaToken(chaveUsuario: any = {}, token: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/DispositivoUsuarios/atualizaToken";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof chaveUsuario !== 'undefined' && chaveUsuario !== null) _urlParams.chaveUsuario = chaveUsuario;
    if (typeof token !== 'undefined' && token !== null) _urlParams.token = token;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DispositivoUsuario`.
   */
  public getModelName() {
    return "DispositivoUsuario";
  }
}
