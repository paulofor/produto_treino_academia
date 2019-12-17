
/* tslint:disable */
import {
	SerieTreino,
	Exercicio,
	ExecucaoItemSerie,
	DiaTreino,
	Acao,
} from '../index';

declare var Object: any;
export interface UsuarioInterface {
	"id"?: string;
	"nome"?: string;
	"senha"?: string;
	"email"?: string;
	"dataHoraCriacao"?: Date;
	"dataHoraUltimoAcesso"?: Date;
	"codigoPagamento"?: string;
	listaSerieTreino?: SerieTreino[];
	listaSerieTreinoCount?: number;
	listaExercicio?: Exercicio[];
	listaExercicioCount?: number;
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
	listaExecucaoItemSerieCount?: number;
	listaDiaTreino?: DiaTreino[];
	listaDiaTreinoCount?: number;
	listaAcao?: Acao[];
	listaAcaoCount?: number;
}

export class Usuario implements UsuarioInterface {
	id?: string;
	nome?: string;
	senha?: string;
	email?: string;
	dataHoraCriacao?: Date;
	dataHoraUltimoAcesso?: Date;
	codigoPagamento?: string;
	listaSerieTreino?: SerieTreino[];
	listaSerieTreinoCount?: number;
	listaExercicio?: Exercicio[];
	listaExercicioCount?: number;
	listaExecucaoItemSerie?: ExecucaoItemSerie[];
	listaExecucaoItemSerieCount?: number;
	listaDiaTreino?: DiaTreino[];
	listaDiaTreinoCount?: number;
	listaAcao?: Acao[];
	listaAcaoCount?: number;
  constructor(data?: UsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Usuario";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Usuario for dynamic purposes.
  **/
  public static factory(data: UsuarioInterface): Usuario{
    return new Usuario(data);
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
      name: 'TreinoAcademia_Usuario',
      plural: 'TreinoAcademia_Usuarios',
      path: 'TreinoAcademia_Usuarios',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "string"
        },
        "nome" : {
        	name : "nome",
        	type : "string"
        },
        "senha" : {
        	name : "senha",
        	type : "string"
        },
        "email" : {
        	name : "email",
        	type : "string"
        },
        "dataHoraCriacao" : {
        	name : "dataHoraCriacao",
        	type : "Date"
        },
        "dataHoraUltimoAcesso" : {
        	name : "dataHoraUltimoAcesso",
        	type : "Date"
        },
        "codigoPagamento" : {
        	name : "codigoPagamento",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}