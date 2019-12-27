/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { SocketConnection } from '../../sockets/socket.connections';
import { SDKModels } from '..';
import { PathValidador } from '../../../assinatura';

/**
 * Api services for the `PagSeguro` model.
 */
@Injectable()
export class PagSeguroApi extends BaseLoopBackApi {


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
   *  - `data` � `{object}` - Model instance data
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PagSeguro` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros";
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
   * @param {any} id PagSeguro id
   *
   * @param {object} data Request data.
   *
   *  - `data` � `{object}` - An object of model property name/value pairs
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PagSeguro` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/:id";
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
   * This method does not accept any data. Supply an empty object.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PagSeguro` object.)
   * </em>
   */
  public IniciaSessao(customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/iniciaSessao";
    let _routeParams: any = {};
    let _postBody: any = {};
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
   *  - `senderHash` � `{string}` - 
   *
   *  - `creditCardToken` � `{string}` - 
   *
   *  - `installmentQuantity` � `{string}` - 
   *
   *  - `installmentValue` � `{string}` - 
   *
   *  - `noInterestInstallmentQuantity` � `{string}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PagSeguro` object.)
   * </em>
   */
  public CheckoutCartao(senderHash: any = {}, creditCardToken: any = {}, installmentQuantity: any = {}, installmentValue: any = {}, noInterestInstallmentQuantity: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/checkoutCartao";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof senderHash !== 'undefined' && senderHash !== null) _urlParams.senderHash = senderHash;
    if (typeof creditCardToken !== 'undefined' && creditCardToken !== null) _urlParams.creditCardToken = creditCardToken;
    if (typeof installmentQuantity !== 'undefined' && installmentQuantity !== null) _urlParams.installmentQuantity = installmentQuantity;
    if (typeof installmentValue !== 'undefined' && installmentValue !== null) _urlParams.installmentValue = installmentValue;
    if (typeof noInterestInstallmentQuantity !== 'undefined' && noInterestInstallmentQuantity !== null) _urlParams.noInterestInstallmentQuantity = noInterestInstallmentQuantity;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `idSessao` � `{string}` - 
   */
  public ObtemSessao(customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/obtemSessao";
    let _routeParams: any = {};
    let _postBody: any = {};
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
   *  - `xml` � `{object}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PagSeguro` object.)
   * </em>
   */
  public PagamentoCaixaBranca(xml: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/pagamentoCaixaBranca";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof xml !== 'undefined' && xml !== null) _urlParams.xml = xml;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {string} creditCardToken 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PagSeguro` object.)
   * </em>
   */
  public AderePlano(creditCardToken: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/aderePlano";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof creditCardToken !== 'undefined' && creditCardToken !== null) _urlParams.creditCardToken = creditCardToken;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public CriaPlano(customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/criaPlano";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} cliente 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PagSeguro` object.)
   * </em>
   */
  public VerificaPagamento(cliente: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/verificaPagamento";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof cliente !== 'undefined' && cliente !== null) _urlParams.cliente = cliente;
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
   *  - `dadoCliente` � `{object}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PagSeguro` object.)
   * </em>
   */
  public AderePlanoTreino(dadoCliente: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = PathValidador + "/" + LoopBackConfig.getApiVersion() +
    "/PagSeguros/aderePlanoTreino";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof dadoCliente !== 'undefined' && dadoCliente !== null) _urlParams.dadoCliente = dadoCliente;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `PagSeguro`.
   */
  public getModelName() {
    return "PagSeguro";
  }
}
