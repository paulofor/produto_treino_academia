
/* tslint:disable */
import {
	CargaPlanejada,
	ExecucaoItemSerie,
	SerieTreino,
	Exercicio,
} from '../index';

declare var Object: any;
export interface ItemSerieInterface {
	"id"?: number;
	"ordemExecucao"?: number;
	"parametros"?: string;
	serieTreino?: SerieTreino;
	exercicio?: Exercicio;
	listaCargaPlanejada?: CargaPlanejada[];
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
}

export class ItemSerie implements ItemSerieInterface {
	id?: number;
	ordemExecucao?: number;
	parametros?: string;
	serieTreino?: SerieTreino;
	exercicio?: Exercicio;
	listaCargaPlanejada?: CargaPlanejada[];
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
  constructor(data?: ItemSerieInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "ItemSerie";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of ItemSerie for dynamic purposes.
  **/
  public static factory(data: ItemSerieInterface): ItemSerie{
    return new ItemSerie(data);
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
      name: 'ItemSerie',
      plural: 'ItemSeries',
      path: 'ItemSeries',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "ordemExecucao" : {
        	name : "ordemExecucao",
        	type : "number"
        },
        "parametros" : {
        	name : "parametros",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}