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
import { VisitaApp } from '../../models/VisitaApp';
import { SocketConnection } from '../../sockets/socket.connections';
import { PathValidador } from '../../../assinatura';


/**
 * Api services for the `VisitaApp` model.
 */
@Injectable()
export class VisitaAppApi extends BaseLoopBackApi {



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
   * Fetches belongsTo relation telaApp.
   *
   * @param {any} id VisitaApp id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `VisitaApp` object.)
   * </em>
   */
  public getTelaApp(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/VisitaApps/:id/telaApp";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Fetches belongsTo relation usuarioProduto.
   *
   * @param {any} id VisitaApp id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `VisitaApp` object.)
   * </em>
   */
  public getUsuarioProduto(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/VisitaApps/:id/usuarioProduto";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Fetches belongsTo relation versaoApp.
   *
   * @param {any} id VisitaApp id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `VisitaApp` object.)
   * </em>
   */
  public getVersaoApp(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/VisitaApps/:id/versaoApp";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
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
   * This usually means the response is a `VisitaApp` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/VisitaApps";
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
   * @param {any} id VisitaApp id
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
   * This usually means the response is a `VisitaApp` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/VisitaApps/:id";
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
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `chaveUsuario` ? `{string}` - 
   *
   *  - `chavePagina` ? `{string}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `VisitaApp` object.)
   * </em>
   */
  public RegistraVisitaTelaApp(chaveUsuario: any, chavePagina: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/VisitaApps/registraVisitaTelaApp";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof chaveUsuario !== 'undefined' && chaveUsuario !== null) _urlParams.chaveUsuario = chaveUsuario;
    if (typeof chavePagina !== 'undefined' && chavePagina !== null) _urlParams.chavePagina = chavePagina;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `chaveUsuario` ? `{string}` - 
   *
   *  - `chaveVersaoApp` ? `{string}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `VisitaApp` object.)
   * </em>
   */
  public RegistraVisitaVersaoApp(chaveUsuario: any = {}, chaveVersaoApp: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/VisitaApps/registraVisitaVersaoApp";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof chaveUsuario !== 'undefined' && chaveUsuario !== null) _urlParams.chaveUsuario = chaveUsuario;
    if (typeof chaveVersaoApp !== 'undefined' && chaveVersaoApp !== null) _urlParams.chaveVersaoApp = chaveVersaoApp;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `VisitaApp`.
   */
  public getModelName() {
    return "VisitaApp";
  }
}
