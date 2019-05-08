
/* tslint:disable */
import {
	ItemSerie,
} from '../index';

declare var Object: any;
export interface CargaPlanejadaInterface {
	"id"?: string;
	"valorCarga"?: number;
	"dataInicio"?: Date;
	"dataFinal"?: Date;
	"quantidadeRepeticao"?: number;
	"ativa"?: number;
	"ordemRepeticao"?: number;
	itemSerie?: ItemSerie;
	itemSerieId? : string;
}

export class CargaPlanejada implements CargaPlanejadaInterface {
	id?: string;
	valorCarga?: number;
	dataInicio?: Date;
	dataFinal?: Date;
	quantidadeRepeticao?: number;
	ativa?: number;
	ordemRepeticao?: number;
	itemSerie?: ItemSerie;
	itemSerieId? : string;
  constructor(data?: CargaPlanejadaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "CargaPlanejada";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of CargaPlanejada for dynamic purposes.
  **/
  public static factory(data: CargaPlanejadaInterface): CargaPlanejada{
    return new CargaPlanejada(data);
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
      name: 'TreinoAcademia_CargaPlanejada',
      plural: 'TreinoAcademia_CargaPlanejadas',
      path: 'TreinoAcademia_CargaPlanejadas',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "string"
        },
        "valorCarga" : {
        	name : "valorCarga",
        	type : "number"
        },
        "dataInicio" : {
        	name : "dataInicio",
        	type : "Date"
        },
        "dataFinal" : {
        	name : "dataFinal",
        	type : "Date"
        },
        "quantidadeRepeticao" : {
        	name : "quantidadeRepeticao",
        	type : "number"
        },
        "ativa" : {
        	name : "ativa",
        	type : "number"
        },
        "ordemRepeticao" : {
        	name : "ordemRepeticao",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}