
/* tslint:disable */
import {
	Exercicio,
} from '../index';

declare var Object: any;
export interface GrupoMuscularInterface {
	"nome"?: string;
	"id"?: number;
	"imagem"?: string;
	listaExercicio?: Exercicio[];
}

export class GrupoMuscular implements GrupoMuscularInterface {
	nome?: string;
	id?: number;
	imagem?: string;
	listaExercicio?: Exercicio[];
  constructor(data?: GrupoMuscularInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "GrupoMuscular";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of GrupoMuscular for dynamic purposes.
  **/
  public static factory(data: GrupoMuscularInterface): GrupoMuscular{
    return new GrupoMuscular(data);
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
      name: 'GrupoMuscular',
      plural: 'GrupoMusculars',
      path: 'GrupoMusculars',
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
        "imagem" : {
        	name : "imagem",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}