
/* tslint:disable */
import {
 
} from '../index';

declare var Object: any;
export interface GrupoTreinoInterface {
  "nome": string;
  "id": number;

}

export class GrupoTreino implements GrupoTreinoInterface {
  "nome": string;
  "id": number;
  constructor(data?: GrupoTreinoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "GrupoTreino";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of GrupoTreino for dynamic purposes.
  **/
  public static factory(data: GrupoTreinoInterface): GrupoTreino{
    return new GrupoTreino(data);
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
      name: 'GrupoTreino',
      plural: 'GrupoTreinos',
      path: 'GrupoTreinos',
      idName: 'id',
      properties: {
		
        "nome" : {
        	name : "nome",
        	type : "string"
        },
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