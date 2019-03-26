
/* tslint:disable */
import {
	ExecucaoItemSerie,
	SerieTreino,
} from '../index';

declare var Object: any;
export interface DiaTreinoInterface {
	"id"?: number;
	"data"?: Date;
	"concluido"?: string;
	serieTreino?: SerieTreino;
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
}

export class DiaTreino implements DiaTreinoInterface {
	id?: number;
	data?: Date;
	concluido?: string;
	serieTreino?: SerieTreino;
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
  constructor(data?: DiaTreinoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "DiaTreino";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of DiaTreino for dynamic purposes.
  **/
  public static factory(data: DiaTreinoInterface): DiaTreino{
    return new DiaTreino(data);
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
      name: 'DiaTreino',
      plural: 'DiaTreinos',
      path: 'DiaTreinos',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "data" : {
        	name : "data",
        	type : "Date"
        },
        "concluido" : {
        	name : "concluido",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}