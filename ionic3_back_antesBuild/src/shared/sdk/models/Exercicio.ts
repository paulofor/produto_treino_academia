
/* tslint:disable */
import {
	ItemSerie,
	ExecucaoItemSerie,
	GrupoMuscular,
	DiaTreino,
	Usuario,
} from '../index';

declare var Object: any;
export interface ExercicioInterface {
	"id"?: string;
	"descricao"?: string;
	"imagem"?: string;
	"titulo"?: string;
	"subtitulo"?: string;
	grupoMuscular?: GrupoMuscular;
	grupoMuscularId? : string;
	usuario?: Usuario;
	usuarioId? : string;
	listaItemSerie?: ItemSerie[];
	listaItemSerieCount?: number;
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
	listaExecucaoItemSerieCount?: number;
	listaDiaTreino?: DiaTreino[];
	listaDiaTreinoCount?: number;
}

export class Exercicio implements ExercicioInterface {
	id?: string;
	descricao?: string;
	imagem?: string;
	titulo?: string;
	subtitulo?: string;
	grupoMuscular?: GrupoMuscular;
	grupoMuscularId? : string;
	usuario?: Usuario;
	usuarioId? : string;
	listaItemSerie?: ItemSerie[];
	listaItemSerieCount?: number;
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
	listaExecucaoItemSerieCount?: number;
	listaDiaTreino?: DiaTreino[];
	listaDiaTreinoCount?: number;
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
      name: 'TreinoAcademia_Exercicio',
      plural: 'TreinoAcademia_Exercicios',
      path: 'TreinoAcademia_Exercicios',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "string"
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