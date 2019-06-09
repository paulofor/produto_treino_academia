

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';

import { GrupoMuscularApi } from '../shared/sdk';
import { SerieTreinoApi } from '../shared/sdk';
import { ExercicioApi } from '../shared/sdk';
import { ExecucaoItemSerieApi } from '../shared/sdk';
import { CargaPlanejadaApi } from '../shared/sdk';
import { DiaTreinoApi } from '../shared/sdk';
import { ItemSerieApi } from '../shared/sdk';
import { RegistroPesoApi } from '../shared/sdk';
import { UsuarioApi } from '../shared/sdk';
import { ExecucaoCargaApi } from '../shared/sdk';
import { AcaoApi } from '../shared/sdk';

// Nao tem PagSeguroApi pq parece nao ser usado em lugar nenhum.

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		SDKBrowserModule.forRoot(),
	],
	providers: [
		SocketDriver,
		SDKModels,
		LoopBackAuth,
		InternalStorage,
		GrupoMuscularApi,
		SerieTreinoApi,
		ExercicioApi,
		ExecucaoItemSerieApi,
		CargaPlanejadaApi,
		DiaTreinoApi,
		ItemSerieApi,
		RegistroPesoApi,
		UsuarioApi,
		ExecucaoCargaApi,
		AcaoApi,
	],
	declarations: 
	[
	]
})
export class ServicoModule { }