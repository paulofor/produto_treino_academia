/* tslint:disable */
import {
  UsuarioProduto,
  NotificacaoApp
} from '../index';

declare var Object: any;
export interface DispositivoUsuarioInterface {
  "tokenFcm"?: string;
  "dataHoraCriacao"?: Date;
  "dataUltimoAcesso"?: Date;
  "dataAlteracao"?: Date;
  "dataChamada"?: Date;
  "temMudanca"?: number;
  "ativo"?: number;
  "codigoDispositivo"?: string;
  "microSd"?: number;
  "versaoSo"?: string;
  "serial"?: string;
  "uuid"?: string;
  "fabricante"?: string;
  "id"?: number;
  "campanhaAdsId"?: number;
  "versaoAppId"?: number;
  "usuarioProdutoId"?: number;
  usuarioProduto?: UsuarioProduto;
  notificacaoApps?: NotificacaoApp[];
}

export class DispositivoUsuario implements DispositivoUsuarioInterface {
  "tokenFcm": string;
  "dataHoraCriacao": Date;
  "dataUltimoAcesso": Date;
  "dataAlteracao": Date;
  "dataChamada": Date;
  "temMudanca": number;
  "ativo": number;
  "codigoDispositivo": string;
  "microSd": number;
  "versaoSo": string;
  "serial": string;
  "uuid": string;
  "fabricante": string;
  "id": number;
  "campanhaAdsId": number;
  "versaoAppId": number;
  "usuarioProdutoId": number;
  usuarioProduto: UsuarioProduto;
  notificacaoApps: NotificacaoApp[];
  constructor(data?: DispositivoUsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DispositivoUsuario`.
   */
  public static getModelName() {
    return "DispositivoUsuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DispositivoUsuario for dynamic purposes.
  **/
  public static factory(data: DispositivoUsuarioInterface): DispositivoUsuario{
    return new DispositivoUsuario(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'DispositivoUsuario',
      plural: 'DispositivoUsuarios',
      path: 'DispositivoUsuarios',
      idName: 'id',
      properties: {
        "tokenFcm": {
          name: 'tokenFcm',
          type: 'string'
        },
        "dataHoraCriacao": {
          name: 'dataHoraCriacao',
          type: 'Date'
        },
        "dataUltimoAcesso": {
          name: 'dataUltimoAcesso',
          type: 'Date'
        },
        "dataAlteracao": {
          name: 'dataAlteracao',
          type: 'Date'
        },
        "dataChamada": {
          name: 'dataChamada',
          type: 'Date'
        },
        "temMudanca": {
          name: 'temMudanca',
          type: 'number'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "codigoDispositivo": {
          name: 'codigoDispositivo',
          type: 'string'
        },
        "microSd": {
          name: 'microSd',
          type: 'number'
        },
        "versaoSo": {
          name: 'versaoSo',
          type: 'string'
        },
        "serial": {
          name: 'serial',
          type: 'string'
        },
        "uuid": {
          name: 'uuid',
          type: 'string'
        },
        "fabricante": {
          name: 'fabricante',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "campanhaAdsId": {
          name: 'campanhaAdsId',
          type: 'number'
        },
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
        "usuarioProdutoId": {
          name: 'usuarioProdutoId',
          type: 'number'
        },
      },
      relations: {
        usuarioProduto: {
          name: 'usuarioProduto',
          type: 'UsuarioProduto',
          model: 'UsuarioProduto',
          relationType: 'belongsTo',
                  keyFrom: 'usuarioProdutoId',
          keyTo: 'id'
        },
        notificacaoApps: {
          name: 'notificacaoApps',
          type: 'NotificacaoApp[]',
          model: 'NotificacaoApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'dispositivoUsuarioId'
        },
      }
    }
  }
}
