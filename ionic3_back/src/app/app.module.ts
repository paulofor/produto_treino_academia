
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Screenshot } from '@ionic-native/screenshot';
import { ChartsModule } from 'ng2-charts';
import { SerieListaExecucaoPage } from '../pages/serie-lista-execucao/serie-lista-execucao';
import { SerieEditaExecucaoPage } from '../pages/serie-edita-execucao/serie-edita-execucao';
import { CadastraItemSeriePage } from '../pages/cadastra-item-serie/cadastra-item-serie';
import { ExercicioGraficoExecucaoPage } from '../pages/exercicio-grafico-execucao/exercicio-grafico-execucao';
import { ExercicioUltimasExecucoesPage } from '../pages/exercicio-ultimas-execucoes/exercicio-ultimas-execucoes';
import { ExercicioCadastroPage } from '../pages/exercicio-cadastro/exercicio-cadastro';
import { ListaExercicioPage } from '../pages/lista-exercicio/lista-exercicio';
import { ListaSerieTreinoPage } from '../pages/lista-serie-treino/lista-serie-treino';
import { EditaItemSeriePage } from '../pages/edita-item-serie/edita-item-serie';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GrupoMuscularApi } from '../shared/sdk';
import { SerieTreinoApi } from '../shared/sdk';
import { ExercicioApi } from '../shared/sdk';
import { ExecucaoItemSerieApi } from '../shared/sdk';
import { CargaPlanejadaApi } from '../shared/sdk';
import { DiaTreinoApi } from '../shared/sdk';
import { ItemSerieApi } from '../shared/sdk';
import { RegistroPesoApi } from '../shared/sdk';
import { UsuarioApi } from '../shared/sdk';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SerieListaExecucaoPage,
	
    SerieEditaExecucaoPage,
	
    CadastraItemSeriePage,
	
    ExercicioGraficoExecucaoPage,
	
    ExercicioUltimasExecucoesPage,
	
    ExercicioCadastroPage,
	
    ListaExercicioPage,
	
    ListaSerieTreinoPage,
	
    EditaItemSeriePage,
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SerieListaExecucaoPage,
	
    SerieEditaExecucaoPage,
	
    CadastraItemSeriePage,
	
    ExercicioGraficoExecucaoPage,
	
    ExercicioUltimasExecucoesPage,
	
    ExercicioCadastroPage,
	
    ListaExercicioPage,
	
    ListaSerieTreinoPage,
	
    EditaItemSeriePage,
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
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
	
    Screenshot
  ]
})
export class AppModule {}
