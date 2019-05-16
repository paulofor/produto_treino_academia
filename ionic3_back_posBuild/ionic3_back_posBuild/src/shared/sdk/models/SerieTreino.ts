
/* tslint:disable */
import {
	ItemSerie,
	DiaTreino,
	Usuario,
} from '../index';

declare var Object: any;
export interface SerieTreinoInterface {
	"id"?: string;
	"dataCriacao"?: Date;
	"ativa"?: number;
	"dataUltimaExecucao"?: Date;
	"qtdeExecucao"?: number;
	"nome"?: string;
	usuario?: Usuario;
	usuarioId? : string;
	listaItemSerie?: ItemSerie[];
	listaItemSerieCount?: number;
	listaDiaTreino?: DiaTreino[];
	listaDiaTreinoCount?: number;
}

export class SerieTreino implements SerieTreinoInterface {
	id?: string;
	dataCriacao?: Date;
	ativa?: number;
	dataUltimaExecucao?: Date;
	qtdeExecucao?: number;
	nome?: string;
	usuario?: Usuario;
	usuarioId? : string;
	listaItemSerie?: ItemSerie[];
	listaItemSerieCount?: number;
	listaDiaTreino?: DiaTreino[];
	listaDiaTreinoCount?: number;
  constructor(data?: SerieTreinoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "SerieTreino";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of SerieTreino for dynamic purposes.
  **/
  public static factory(data: SerieTreinoInterface): SerieTreino{
    return new SerieTreino(data);
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
      name: 'TreinoAcademia_SerieTreino',
      plural: 'TreinoAcademia_SerieTreinos',
      path: 'TreinoAcademia_SerieTreinos',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "string"
        },
        "dataCriacao" : {
        	name : "dataCriacao",
        	type : "Date"
        },
        "ativa" : {
        	name : "ativa",
        	type : "number"
        },
        "dataUltimaExecucao" : {
        	name : "dataUltimaExecucao",
        	type : "Date"
        },
        "qtdeExecucao" : {
        	name : "qtdeExecucao",
        	type : "number"
        },
        "nome" : {
        	name : "nome",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}