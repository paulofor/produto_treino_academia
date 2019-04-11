
/* tslint:disable */
import {
	ItemSerie,
	DiaTreino,
	Usuario,
} from '../index';

declare var Object: any;
export interface SerieTreinoInterface {
	"id"?: number;
	"dataCriacao"?: Date;
	"ativa"?: string;
	"dataUltimaExecucao"?: Date;
	"qtdeExecucao"?: number;
	usuario?: Usuario;
	listaItemSerie?: ItemSerie[];
	listaDiaTreino?: DiaTreino[];
}

export class SerieTreino implements SerieTreinoInterface {
	id?: number;
	dataCriacao?: Date;
	ativa?: string;
	dataUltimaExecucao?: Date;
	qtdeExecucao?: number;
	usuario?: Usuario;
	listaItemSerie?: ItemSerie[];
	listaDiaTreino?: DiaTreino[];
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
      name: 'SerieTreino',
      plural: 'SerieTreinos',
      path: 'SerieTreinos',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "dataCriacao" : {
        	name : "dataCriacao",
        	type : "Date"
        },
        "ativa" : {
        	name : "ativa",
        	type : "string"
        },
        "dataUltimaExecucao" : {
        	name : "dataUltimaExecucao",
        	type : "Date"
        },
        "qtdeExecucao" : {
        	name : "qtdeExecucao",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}