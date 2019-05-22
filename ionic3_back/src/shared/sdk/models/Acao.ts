
/* tslint:disable */
import {
	Usuario,
} from '../index';

declare var Object: any;
export interface AcaoInterface {
	"nome"?: string;
	"dataHora"?: Date;
	"objeto"?: string;
	"id"?: number;
	usuario?: Usuario;
	usuarioId? : string;
}

export class Acao implements AcaoInterface {
	nome?: string;
	dataHora?: Date;
	objeto?: string;
	id?: number;
	usuario?: Usuario;
	usuarioId? : string;
  constructor(data?: AcaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Acao";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Acao for dynamic purposes.
  **/
  public static factory(data: AcaoInterface): Acao{
    return new Acao(data);
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
      name: 'TreinoAcademia_Acao',
      plural: 'TreinoAcademia_Acaos',
      path: 'TreinoAcademia_Acaos',
      idName: 'id',
      properties: {
		
        "nome" : {
        	name : "nome",
        	type : "string"
        },
        "dataHora" : {
        	name : "dataHora",
        	type : "Date"
        },
        "objeto" : {
        	name : "objeto",
        	type : "string"
        },
        "id" : {
        	name : "id",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}