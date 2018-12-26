
/* tslint:disable */
import {
 
} from '../index';

declare var Object: any;
export interface DiaTreinoInterface {
  "id": number;

}

export class DiaTreino implements DiaTreinoInterface {
  "id": number;
  constructor(data?: DiaTreinoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "DiaTreino";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of DiaTreino for dynamic purposes.
  **/
  public static factory(data: DiaTreinoInterface): DiaTreino{
    return new DiaTreino(data);
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
      name: 'DiaTreino',
      plural: 'DiaTreinos',
      path: 'DiaTreinos',
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