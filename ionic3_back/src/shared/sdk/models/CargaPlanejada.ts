
/* tslint:disable */
import {
	ItemSerie,
	Usuario,
} from '../index';

declare var Object: any;
export interface CargaPlanejadaInterface {
	"id"?: number;
	"valorCarga"?: number;
	"dataInicio"?: Date;
	"dataFinal"?: Date;
	"quantidadeRepeticao"?: number;
	"ativa"?: string;
	"ordemRepeticao"?: number;
	itemSerie?: ItemSerie;
	usuario?: Usuario;
}

export class CargaPlanejada implements CargaPlanejadaInterface {
	id?: number;
	valorCarga?: number;
	dataInicio?: Date;
	dataFinal?: Date;
	quantidadeRepeticao?: number;
	ativa?: string;
	ordemRepeticao?: number;
	itemSerie?: ItemSerie;
	usuario?: Usuario;
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
      name: 'CargaPlanejada',
      plural: 'CargaPlanejadas',
      path: 'CargaPlanejadas',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
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
        	type : "string"
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