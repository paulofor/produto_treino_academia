

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';

import { GrupoTreinoApi } from '../shared/sdk';
import { SerieApi } from '../shared/sdk';
import { ExercicioApi } from '../shared/sdk';
import { ExecucaoApi } from '../shared/sdk';
import { CargaPlanejadaApi } from '../shared/sdk';
import { DiaTreinoApi } from '../shared/sdk';
import { ItemSerieApi } from '../shared/sdk';


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
		GrupoTreinoApi,
		SerieApi,
		ExercicioApi,
		ExecucaoApi,
		CargaPlanejadaApi,
		DiaTreinoApi,
		ItemSerieApi,
	],
	declarations: 
	[
	]
})
export class ServicoModule { }