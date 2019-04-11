
/* tslint:disable */
import {
	Usuario,
} from '../index';

declare var Object: any;
export interface RegistroPesoInterface {
	"id"?: number;
	"data"?: Date;
	"valor"?: number;
	"obs"?: string;
	usuario?: Usuario;
}

export class RegistroPeso implements RegistroPesoInterface {
	id?: number;
	data?: Date;
	valor?: number;
	obs?: string;
	usuario?: Usuario;
  constructor(data?: RegistroPesoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "RegistroPeso";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of RegistroPeso for dynamic purposes.
  **/
  public static factory(data: RegistroPesoInterface): RegistroPeso{
    return new RegistroPeso(data);
  }
  /**
  * @method getModelDefinition
  * @author Gerador Java
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'RegistroPeso',
      plural: 'RegistroPesos',
      path: 'RegistroPesos',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "data" : {
        	name : "data",
        	type : "Date"
        },
        "valor" : {
        	name : "valor",
        	type : "number"
        },
        "obs" : {
        	name : "obs",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}