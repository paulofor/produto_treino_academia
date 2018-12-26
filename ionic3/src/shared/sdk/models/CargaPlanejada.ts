
/* tslint:disable */
import {
 
} from '../index';

declare var Object: any;
export interface CargaPlanejadaInterface {
  "id": number;

}

export class CargaPlanejada implements CargaPlanejadaInterface {
  "id": number;
  constructor(data?: CargaPlanejadaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "CargaPlanejada";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of CargaPlanejada for dynamic purposes.
  **/
  public static factory(data: CargaPlanejadaInterface): CargaPlanejada{
    return new CargaPlanejada(data);
  }
  /**
  * @method getModelDefinition
  * @author Paulo
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CargaPlanejada',
      plural: 'CargaPlanejadas',
      path: 'CargaPlanejadas',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}