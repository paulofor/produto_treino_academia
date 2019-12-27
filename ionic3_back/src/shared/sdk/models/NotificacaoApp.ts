/* tslint:disable */

declare var Object: any;
export interface NotificacaoAppInterface {
  "dataHoraEnvio"?: Date;
  "tokenNotificacao"?: string;
  "dataHoraAcesso"?: Date;
  "dataHoraCriacao"?: Date;
  "resultadoEnvio"?: string;
  "tipoEnvio"?: string;
  "titulo"?: string;
  "corpo"?: string;
  "badge"?: string;
  "cor"?: string;
  "tokenFcm"?: string;
  "id"?: number;
  "dispositivoUsuarioId"?: number;
  "usuarioProdutoId"?: number;
}

export class NotificacaoApp implements NotificacaoAppInterface {
  "dataHoraEnvio": Date;
  "tokenNotificacao": string;
  "dataHoraAcesso": Date;
  "dataHoraCriacao": Date;
  "resultadoEnvio": string;
  "tipoEnvio": string;
  "titulo": string;
  "corpo": string;
  "badge": string;
  "cor": string;
  "tokenFcm": string;
  "id": number;
  "dispositivoUsuarioId": number;
  "usuarioProdutoId": number;
  constructor(data?: NotificacaoAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `NotificacaoApp`.
   */
  public static getModelName() {
    return "NotificacaoApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of NotificacaoApp for dynamic purposes.
  **/
  public static factory(data: NotificacaoAppInterface): NotificacaoApp{
    return new NotificacaoApp(data);
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
      name: 'NotificacaoApp',
      plural: 'NotificacaoApps',
      path: 'NotificacaoApps',
      idName: 'id',
      properties: {
        "dataHoraEnvio": {
          name: 'dataHoraEnvio',
          type: 'Date'
        },
        "tokenNotificacao": {
          name: 'tokenNotificacao',
          type: 'string'
        },
        "dataHoraAcesso": {
          name: 'dataHoraAcesso',
          type: 'Date'
        },
        "dataHoraCriacao": {
          name: 'dataHoraCriacao',
          type: 'Date'
        },
        "resultadoEnvio": {
          name: 'resultadoEnvio',
          type: 'string'
        },
        "tipoEnvio": {
          name: 'tipoEnvio',
          type: 'string'
        },
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "corpo": {
          name: 'corpo',
          type: 'string'
        },
        "badge": {
          name: 'badge',
          type: 'string'
        },
        "cor": {
          name: 'cor',
          type: 'string'
        },
        "tokenFcm": {
          name: 'tokenFcm',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "dispositivoUsuarioId": {
          name: 'dispositivoUsuarioId',
          type: 'number'
        },
        "usuarioProdutoId": {
          name: 'usuarioProdutoId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
