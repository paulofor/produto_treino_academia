
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { GrupoMuscular } from '../../models/GrupoMuscular';
import { SerieTreino } from '../../models/SerieTreino';
import { Exercicio } from '../../models/Exercicio';
import { ExecucaoItemSerie } from '../../models/ExecucaoItemSerie';
import { CargaPlanejada } from '../../models/CargaPlanejada';
import { DiaTreino } from '../../models/DiaTreino';
import { ItemSerie } from '../../models/ItemSerie';
import { RegistroPeso } from '../../models/RegistroPeso';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	GrupoMuscular: GrupoMuscular,
	SerieTreino: SerieTreino,
	Exercicio: Exercicio,
	ExecucaoItemSerie: ExecucaoItemSerie,
	CargaPlanejada: CargaPlanejada,
	DiaTreino: DiaTreino,
	ItemSerie: ItemSerie,
	RegistroPeso: RegistroPeso,
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
