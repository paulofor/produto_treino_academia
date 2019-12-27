/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface VisitanteInterface {
  "codigoCookie"?: string;
  "dataHora"?: Date;
  "id"?: number;
  "dispositivo"?: string;
  "versaoAppId"?: number;
  "fcmToken"?: string;
  "dataHoraNotificacao"?: Date;
}

export class Visitante implements VisitanteInterface {
  "codigoCookie": string;
  "dataHora": Date;
  "id": number;
  "dispositivo": string;
  "versaoAppId": number;
  "fcmToken": string;
  "dataHoraNotificacao": Date;
  constructor(data?: VisitanteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Visitante`.
   */
  public static getModelName() {
    return "Visitante";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Visitante for dynamic purposes.
  **/
  public static factory(data: VisitanteInterface): Visitante{
    return new Visitante(data);
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
      name: 'Visitante',
      plural: 'Visitantes',
      path: 'Visitantes',
      idName: 'id',
      properties: {
        "codigoCookie": {
          name: 'codigoCookie',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "dispositivo": {
          name: 'dispositivo',
          type: 'string'
        },
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
        "fcmToken": {
          name: 'fcmToken',
          type: 'string'
        },
        "dataHoraNotificacao": {
          name: 'dataHoraNotificacao',
          type: 'Date'
        }
      },
      relations: {
      }
    }
  }
}
