
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
import { DiaTreino } from '../../models/DiaTreino';
import { SocketConnection } from '../../sockets/socket.connections';
import { DIATREINO } from '../../../../dados/diaTreino';
//import { of } from 'rxjs';
//Versao Ionic
import { of } from 'rxjs/observable/of';
import {DIATREINO_CONSULTALISTADIATREINOPAGE} from  '../../../../dados/diaTreino';
import {DIATREINO_EXECUTATREINOPAGE} from  '../../../../dados/diaTreino';
import {DIATREINO_DETALHEDIATREINOPAGE} from  '../../../../dados/diaTreino';
/**
 * Api services for the `Aplicacao` model.
 */
@Injectable()
export class DiaTreinoApi extends BaseLoopBackApi {

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
    "/diaTreinos";
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
    "/diaTreinos/:id";
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
    return "DiaTreino";
  }
  
  obtemPrimeiro(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<DiaTreino> {
    return of(DIATREINO[0]);
  }
  obtemLista(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<DiaTreino[]> {
    return of(DIATREINO);
  }
  obtemElemento(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<DiaTreino> {
    return of(DIATREINO[filter.where.id]);
  }

	getConsultaListaDiaTreinoPageLoad(filter: LoopBackFilter = {}) : Observable<DiaTreino> {
		return of (DIATREINO_CONSULTALISTADIATREINOPAGE);
	}
	getExecutaTreinoPageLoad(filter: LoopBackFilter = {}) : Observable<DiaTreino> {
		return of (DIATREINO_EXECUTATREINOPAGE);
	}
	getDetalheDiaTreinoPageLoad(filter: LoopBackFilter = {}) : Observable<DiaTreino> {
		return of (DIATREINO_DETALHEDIATREINOPAGE);
	}

  

  // aprender mais para fazer algo que trate falha de conexao --> 25/05/2019
  public createDg<DiaTreino>(data: DiaTreino, erroMsg? :string, customHeaders?: Function): Observable<DiaTreino> {
    let result : Observable<DiaTreino> = this.create(data,customHeaders);
    //result.subscribe((result:DiaTreino) => {}, (erro:any) => {}); // com isso duplica
    return result;
  }


  public finalizaDia(IdDiaTreino : any , customHeaders?: Function) : Observable<DiaTreino> {
    let _method: string = "POST";
		let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    		"/TreinoAcademia_DiaTreinos/finalizaDia";
    	let _routeParams: any = {};
    	let _postBody: any = {};
    	let _urlParams: any = {};
    	if (typeof IdDiaTreino !== 'undefined' && IdDiaTreino !== null) _urlParams.IdDiaTreino = IdDiaTreino;
    	let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    	return result;
	}
}