
/* tslint:disable */
import {
 
} from '../index';

declare var Object: any;
export interface ExecucaoInterface {
  "id": number;

}

export class Execucao implements ExecucaoInterface {
  "id": number;
  constructor(data?: ExecucaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Execucao";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of Execucao for dynamic purposes.
  **/
  public static factory(data: ExecucaoInterface): Execucao{
    return new Execucao(data);
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
      name: 'Execucao',
      plural: 'Execucaos',
      path: 'Execucaos',
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