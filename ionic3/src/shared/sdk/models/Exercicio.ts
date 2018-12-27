
/* tslint:disable */
import {
	ItemSerie,
	ExecucaoItemSerie,
} from '../index';

declare var Object: any;
export interface ExercicioInterface {
  "id"?: number;
  "descricao"?: string;
  "imagem"?: string;
  "titulo"?: string;
  "subtitulo"?: string;
	"itemSerie"?: ItemSerie;
	"execucaoItemSerie"?: ExecucaoItemSerie;
}

export class Exercicio implements ExercicioInterface {
	"id"?: number;
	"descricao"?: string;
	"imagem"?: string;
	"titulo"?: string;
	"subtitulo"?: string;
	"itemSerie"?: ItemSerie;
	"execucaoItemSerie"?: ExecucaoItemSerie;
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
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Exercicio for dynamic purposes.
  **/
  public static factory(data: ExercicioInterface): Exercicio{
    return new Exercicio(data);
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
      name: 'Exercicio',
      plural: 'Exercicios',
      path: 'Exercicios',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "descricao" : {
        	name : "descricao",
        	type : "string"
        },
        "imagem" : {
        	name : "imagem",
        	type : "string"
        },
        "titulo" : {
        	name : "titulo",
        	type : "string"
        },
        "subtitulo" : {
        	name : "subtitulo",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}