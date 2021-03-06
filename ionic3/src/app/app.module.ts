import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SerieTreinoPage } from '../pages/serie-treino/serie-treino';
import { CadastroExercicioPage } from '../pages/cadastro-exercicio/cadastro-exercicio';
import { ExecucaoItemTreinoPage } from '../pages/execucao-item-treino/execucao-item-treino';
import { CriaSeriePage } from '../pages/cria-serie/cria-serie';
import { ListaExercicioExecucaoPage } from '../pages/lista-exercicio-execucao/lista-exercicio-execucao';
import { GraficoExecucaoExercicioPage } from '../pages/grafico-execucao-exercicio/grafico-execucao-exercicio';
import { SerieTreinoApi } from '../shared/sdk/index';
import { ServicoModule } from '../servico/servico.module';
import { Screenshot } from '@ionic-native/screenshot';

import { ChartsModule } from 'ng2-charts';
import { ImageResizer } from '@ionic-native/image-resizer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SerieTreinoPage,
    ExecucaoItemTreinoPage,
    CadastroExercicioPage,
    CriaSeriePage,
    ListaExercicioExecucaoPage,
    GraficoExecucaoExercicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ServicoModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SerieTreinoPage,
    ExecucaoItemTreinoPage,
    CadastroExercicioPage,
    CriaSeriePage,
    ListaExercicioExecucaoPage,
    GraficoExecucaoExercicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SerieTreinoApi,
    Screenshot,
    ImageResizer
  ]
})
export class AppModule {}
