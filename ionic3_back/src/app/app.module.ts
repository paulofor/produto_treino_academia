
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
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ComandosZeroPage } from '../pages/comandos-zero/comandos-zero';
import { IonicStorageModule } from '@ionic/storage';
import { BrMaskerModule } from 'brmasker-ionic-3';

import { SerieEditaExecucaoPage } from '../pages/serie-edita-execucao/serie-edita-execucao';
import { ExercicioGraficoExecucaoPage } from '../pages/exercicio-grafico-execucao/exercicio-grafico-execucao';
import { ConsultaListaDiaTreinoPage } from '../pages/consulta-lista-dia-treino/consulta-lista-dia-treino';
import { CriaSerieWorkPage } from '../pages/cria-serie-work/cria-serie-work';
import { ListaSerieTreinoPage } from '../pages/lista-serie-treino/lista-serie-treino';
import { CriaSeriePage } from '../pages/cria-serie/cria-serie';
import { InicioTreinoDiaPage } from '../pages/inicio-treino-dia/inicio-treino-dia';
import { SerieTreinoEdicaoPage } from '../pages/serie-treino-edicao/serie-treino-edicao';
import { ExecutaTreinoPage } from '../pages/executa-treino/executa-treino';
import { ConsultaListaExercicioPage } from '../pages/consulta-lista-exercicio/consulta-lista-exercicio';
import { DetalheDiaTreinoPage } from '../pages/detalhe-dia-treino/detalhe-dia-treino';
import { EscolhaSerieTreinoPage } from '../pages/escolha-serie-treino/escolha-serie-treino';
import { PrincipalPerformancePage } from '../pages/principal-performance/principal-performance';
import { FaleComDevPage } from '../pages/fale-com-dev/fale-com-dev';

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
import { ExecucaoCargaApi } from '../shared/sdk';
import { AcaoApi } from '../shared/sdk';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ComandosZeroPage,
    SerieEditaExecucaoPage,
	
    ExercicioGraficoExecucaoPage,
	
    ConsultaListaDiaTreinoPage,
	
    CriaSerieWorkPage,
	
    ListaSerieTreinoPage,
	
    CriaSeriePage,
	
    InicioTreinoDiaPage,
	
    SerieTreinoEdicaoPage,
	
    ExecutaTreinoPage,
	
    ConsultaListaExercicioPage,
	
    DetalheDiaTreinoPage,
	
    EscolhaSerieTreinoPage,
	
    PrincipalPerformancePage,
	
    FaleComDevPage,
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    ChartsModule,
    IonicStorageModule.forRoot(),
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ComandosZeroPage,
    SerieEditaExecucaoPage,
	
    ExercicioGraficoExecucaoPage,
	
    ConsultaListaDiaTreinoPage,
	
    CriaSerieWorkPage,
	
    ListaSerieTreinoPage,
	
    CriaSeriePage,
	
    InicioTreinoDiaPage,
	
    SerieTreinoEdicaoPage,
	
    ExecutaTreinoPage,
	
    ConsultaListaExercicioPage,
	
    DetalheDiaTreinoPage,
	
    EscolhaSerieTreinoPage,
	
    PrincipalPerformancePage,
	
    FaleComDevPage,
	
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
	
	ExecucaoCargaApi,
	
	AcaoApi,
	
    Screenshot,
    Storage
  ]
})
export class AppModule {}
