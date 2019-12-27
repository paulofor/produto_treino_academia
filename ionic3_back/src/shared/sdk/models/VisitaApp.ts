/* tslint:disable */

declare var Object: any;
export interface VisitaAppInterface {
  "dataHora"?: Date;
  "id"?: number;
  "telaAppId"?: number;
  "usuarioProdutoId"?: number;
  "versaoAppId"?: number;
}

export class VisitaApp implements VisitaAppInterface {
  "dataHora": Date;
  "id": number;
  "telaAppId": number;
  "usuarioProdutoId": number;
  "versaoAppId": number;
  constructor(data?: VisitaAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VisitaApp`.
   */
  public static getModelName() {
    return "VisitaApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VisitaApp for dynamic purposes.
  **/
  public static factory(data: VisitaAppInterface): VisitaApp{
    return new VisitaApp(data);
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
      name: 'VisitaApp',
      plural: 'VisitaApps',
      path: 'VisitaApps',
      idName: 'id',
      properties: {
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "telaAppId": {
          name: 'telaAppId',
          type: 'number'
        },
        "usuarioProdutoId": {
          name: 'usuarioProdutoId',
          type: 'number'
        },
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
      },
      relations: {
        telaApp: {
          name: 'telaApp',
          type: 'TelaApp',
          model: 'TelaApp',
          relationType: 'belongsTo',
                  keyFrom: 'telaAppId',
          keyTo: 'id'
        },
        usuarioProduto: {
          name: 'usuarioProduto',
          type: 'UsuarioProduto',
          model: 'UsuarioProduto',
          relationType: 'belongsTo',
                  keyFrom: 'usuarioProdutoId',
          keyTo: 'id'
        },
        versaoApp: {
          name: 'versaoApp',
          type: 'VersaoApp',
          model: 'VersaoApp',
          relationType: 'belongsTo',
                  keyFrom: 'versaoAppId',
          keyTo: 'id'
        },
      }
    }
  }
}
