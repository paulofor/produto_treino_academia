
/* tslint:disable */
import {
	ExecucaoItemSerie,
	SerieTreino,
	Exercicio,
	Usuario,
} from '../index';

declare var Object: any;
export interface DiaTreinoInterface {
	"id"?: number;
	"data"?: Date;
	"concluido"?: number;
	serieTreino?: SerieTreino;
	serieTreinoId? : number;
	usuario?: Usuario;
	usuarioId? : number;
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
	listaExercicio?: Exercicio[];
}

export class DiaTreino implements DiaTreinoInterface {
	id?: number;
	data?: Date;
	concluido?: number;
	serieTreino?: SerieTreino;
	serieTreinoId? : number;
	usuario?: Usuario;
	usuarioId? : number;
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
	listaExercicio?: Exercicio[];
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
      name: 'TreinoAcademia_DiaTreino',
      plural: 'TreinoAcademia_DiaTreinos',
      path: 'TreinoAcademia_DiaTreinos',
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
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}