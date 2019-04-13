
/* tslint:disable */
import {
	DiaTreino,
	ItemSerie,
	Exercicio,
	Usuario,
} from '../index';

declare var Object: any;
export interface ExecucaoItemSerieInterface {
	"id"?: number;
	"dataHoraInicio"?: Date;
	"dataHoraFinalizacao"?: Date;
	"cargaUtilizada"?: number;
	"sucessoRepeticoes"?: string;
	"numeroSerie"?: number;
	"quantidadeRepeticao"?: number;
	diaTreino?: DiaTreino;
	diaTreinoId? : number;
	itemSerie?: ItemSerie;
	itemSerieId? : number;
	exercicio?: Exercicio;
	exercicioId? : number;
	usuario?: Usuario;
	usuarioId? : number;
}

export class ExecucaoItemSerie implements ExecucaoItemSerieInterface {
	id?: number;
	dataHoraInicio?: Date;
	dataHoraFinalizacao?: Date;
	cargaUtilizada?: number;
	sucessoRepeticoes?: string;
	numeroSerie?: number;
	quantidadeRepeticao?: number;
	diaTreino?: DiaTreino;
	diaTreinoId? : number;
	itemSerie?: ItemSerie;
	itemSerieId? : number;
	exercicio?: Exercicio;
	exercicioId? : number;
	usuario?: Usuario;
	usuarioId? : number;
  constructor(data?: ExecucaoItemSerieInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "ExecucaoItemSerie";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of ExecucaoItemSerie for dynamic purposes.
  **/
  public static factory(data: ExecucaoItemSerieInterface): ExecucaoItemSerie{
    return new ExecucaoItemSerie(data);
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
      name: 'TreinoAcademia_ExecucaoItemSerie',
      plural: 'TreinoAcademia_ExecucaoItemSeries',
      path: 'TreinoAcademia_ExecucaoItemSeries',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "dataHoraInicio" : {
        	name : "dataHoraInicio",
        	type : "Date"
        },
        "dataHoraFinalizacao" : {
        	name : "dataHoraFinalizacao",
        	type : "Date"
        },
        "cargaUtilizada" : {
        	name : "cargaUtilizada",
        	type : "number"
        },
        "sucessoRepeticoes" : {
        	name : "sucessoRepeticoes",
        	type : "string"
        },
        "numeroSerie" : {
        	name : "numeroSerie",
        	type : "number"
        },
        "quantidadeRepeticao" : {
        	name : "quantidadeRepeticao",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}