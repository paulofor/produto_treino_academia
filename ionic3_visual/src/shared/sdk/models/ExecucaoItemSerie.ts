
/* tslint:disable */
import {
	ExecucaoCarga,
	DiaTreino,
	ItemSerie,
	Exercicio,
	Usuario,
} from '../index';

declare var Object: any;
export interface ExecucaoItemSerieInterface {
	"id"?: string;
	"dataHoraInicio"?: Date;
	"dataHoraFinalizacao"?: Date;
	"cargaUtilizada"?: number;
	"sucessoRepeticoes"?: number;
	"numeroSerie"?: number;
	"quantidadeRepeticao"?: number;
	diaTreino?: DiaTreino;
	diaTreinoId? : string;
	itemSerie?: ItemSerie;
	itemSerieId? : string;
	exercicio?: Exercicio;
	exercicioId? : string;
	usuario?: Usuario;
	usuarioId? : string;
	listaExecucaoCarga?: ExecucaoCarga[];
	listaExecucaoCargaCount?: number;
}

export class ExecucaoItemSerie implements ExecucaoItemSerieInterface {
	id?: string;
	dataHoraInicio?: Date;
	dataHoraFinalizacao?: Date;
	cargaUtilizada?: number;
	sucessoRepeticoes?: number;
	numeroSerie?: number;
	quantidadeRepeticao?: number;
	diaTreino?: DiaTreino;
	diaTreinoId? : string;
	itemSerie?: ItemSerie;
	itemSerieId? : string;
	exercicio?: Exercicio;
	exercicioId? : string;
	usuario?: Usuario;
	usuarioId? : string;
	listaExecucaoCarga?: ExecucaoCarga[];
	listaExecucaoCargaCount?: number;
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
        	type : "string"
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
        	type : "number"
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