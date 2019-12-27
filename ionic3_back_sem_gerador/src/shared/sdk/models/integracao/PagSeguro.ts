/* tslint:disable */

declare var Object: any;
export interface PagSeguroInterface {
  "id"?: number;
}

export class PagSeguro implements PagSeguroInterface {
  "id": number;
  constructor(data?: PagSeguroInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PagSeguro`.
   */
  public static getModelName() {
    return "PagSeguro";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PagSeguro for dynamic purposes.
  **/
  public static factory(data: PagSeguroInterface): PagSeguro{
    return new PagSeguro(data);
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
      name: 'PagSeguro',
      plural: 'PagSeguros',
      path: 'PagSeguros',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
