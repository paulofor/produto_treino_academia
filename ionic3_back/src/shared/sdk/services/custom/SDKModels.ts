
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { Visitante } from '../../models/Visitante';
import { DispositivoUsuario } from '../../models/DispositivoUsuario';
import { VisitaApp } from '../../models/VisitaApp';
import { GrupoMuscular } from '../../models/GrupoMuscular';
import { SerieTreino } from '../../models/SerieTreino';
import { Exercicio } from '../../models/Exercicio';
import { ExecucaoItemSerie } from '../../models/ExecucaoItemSerie';
import { CargaPlanejada } from '../../models/CargaPlanejada';
import { DiaTreino } from '../../models/DiaTreino';
import { ItemSerie } from '../../models/ItemSerie';
import { RegistroPeso } from '../../models/RegistroPeso';
import { Usuario } from '../../models/Usuario';
import { ExecucaoCarga } from '../../models/ExecucaoCarga';
import { Acao } from '../../models/Acao';
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
	Usuario: Usuario,
	ExecucaoCarga: ExecucaoCarga,
	Acao: Acao,
	User: User,
    Container: Container,
    Visitante : Visitante,
    DispositivoUsuario : DispositivoUsuario,
    VisitaApp : VisitaApp
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
