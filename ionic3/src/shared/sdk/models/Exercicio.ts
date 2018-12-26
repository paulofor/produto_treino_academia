
/* tslint:disable */
import {
 
} from '../index';

declare var Object: any;
export interface ExercicioInterface {
  "id": number;
  "nome": string;
  "carga": number;
  "repeticoes": number;

}

export class Exercicio implements ExercicioInterface {
  "id": number;
  "nome": string;
  "carga": number;
  "repeticoes": number;
  constructor(data?: ExercicioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Exercicio";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of Exercicio for dynamic purposes.
  **/
  public static factory(data: ExercicioInterface): Exercicio{
    return new Exercicio(data);
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
      name: 'Exercicio',
      plural: 'Exercicios',
      path: 'Exercicios',
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
        "carga" : {
        	name : "carga",
        	type : "number"
        },
        "repeticoes" : {
        	name : "repeticoes",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}