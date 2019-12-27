/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificacaoApp } from '../../models/NotificacaoApp';
import { SocketConnection } from '../../sockets/socket.connections';
import { PathValidador } from '../../../assinatura';


/**
 * Api services for the `NotificacaoApp` model.
 */
@Injectable()
export class NotificacaoAppApi extends BaseLoopBackApi {


  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http, connection, models, auth, errorHandler);
  }


  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
      "/NotificacaoApps";
    let _routeParams: any = {};
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }


  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
      "/NotificacaoApps/:id";
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


  public RegistraAcesso(tokenNotificacao: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
      "/NotificacaoApps/registraAcesso";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof tokenNotificacao !== 'undefined' && tokenNotificacao !== null) _urlParams.tokenNotificacao = tokenNotificacao;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  


  /**
   * The name of the model represented by this $resource,
   * i.e. `NotificacaoApp`.
   */
  public getModelName() {
    return "NotificacaoApp";
  }
}
