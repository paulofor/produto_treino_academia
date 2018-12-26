
/* tslint:disable */
import {
 
} from '../index';

declare var Object: any;
export interface SerieInterface {
  "id": number;
  "nome": string;
  "data inicial": Date;
  "idP": number;

}

export class Serie implements SerieInterface {
  "id": number;
  "nome": string;
  "data inicial": Date;
  "idP": number;
  constructor(data?: SerieInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Serie";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of Serie for dynamic purposes.
  **/
  public static factory(data: SerieInterface): Serie{
    return new Serie(data);
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
      name: 'Serie',
      plural: 'Series',
      path: 'Series',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "nome" : {
        	name : "nome",
        	type : "string"
        },
        "data inicial" : {
        	name : "data inicial",
        	type : "Date"
        },
        "idP" : {
        	name : "idP",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}