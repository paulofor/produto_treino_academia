
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { GrupoTreino } from '../../models/GrupoTreino';
import { Serie } from '../../models/Serie';
import { Exercicio } from '../../models/Exercicio';
import { Execucao } from '../../models/Execucao';
import { CargaPlanejada } from '../../models/CargaPlanejada';
import { DiaTreino } from '../../models/DiaTreino';
import { ItemSerie } from '../../models/ItemSerie';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	GrupoTreino: GrupoTreino,
	Serie: Serie,
	Exercicio: Exercicio,
	Execucao: Execucao,
	CargaPlanejada: CargaPlanejada,
	DiaTreino: DiaTreino,
	ItemSerie: ItemSerie,
	User: User,
    Container: Container
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
