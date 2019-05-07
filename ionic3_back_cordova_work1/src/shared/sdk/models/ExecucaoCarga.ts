
/* tslint:disable */
import {
	ExecucaoItemSerie,
} from '../index';

declare var Object: any;
export interface ExecucaoCargaInterface {
	"id"?: string;
	"dataHora"?: Date;
	"valorCarga"?: number;
	"repeticao"?: number;
	"sequencia"?: number;
	execucaoItemSerie?: ExecucaoItemSerie;
	execucaoItemSerieId? : string;
}

export class ExecucaoCarga implements ExecucaoCargaInterface {
	id?: string;
	dataHora?: Date;
	valorCarga?: number;
	repeticao?: number;
	sequencia?: number;
	execucaoItemSerie?: ExecucaoItemSerie;
	execucaoItemSerieId? : string;
  constructor(data?: ExecucaoCargaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "ExecucaoCarga";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of ExecucaoCarga for dynamic purposes.
  **/
  public static factory(data: ExecucaoCargaInterface): ExecucaoCarga{
    return new ExecucaoCarga(data);
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
      name: 'TreinoAcademia_ExecucaoCarga',
      plural: 'TreinoAcademia_ExecucaoCargas',
      path: 'TreinoAcademia_ExecucaoCargas',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "string"
        },
        "dataHora" : {
        	name : "dataHora",
        	type : "Date"
        },
        "valorCarga" : {
        	name : "valorCarga",
        	type : "number"
        },
        "repeticao" : {
        	name : "repeticao",
        	type : "number"
        },
        "sequencia" : {
        	name : "sequencia",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}