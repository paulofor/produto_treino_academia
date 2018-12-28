import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicoModule } from '../servico/servico.module';
import { SerieTreinoDetalhePage } from '../pages/serie-treino-detalhe/serie-treino-detalhe';
import { RegistroPesoListaPage } from '../pages/registro-peso-lista/registro-peso-lista';
import { ExercicioDetalhePage } from '../pages/exercicio-detalhe/exercicio-detalhe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SerieTreinoDetalhePage,
    RegistroPesoListaPage,
    ExercicioDetalhePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ServicoModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SerieTreinoDetalhePage,
    RegistroPesoListaPage,
    ExercicioDetalhePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
