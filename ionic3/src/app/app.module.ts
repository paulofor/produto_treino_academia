import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicoModule } from '../servico/servico.module';
import { SerieTreinoDetalhePage } from '../pages/serie-treino-detalhe/serie-treino-detalhe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SerieTreinoDetalhePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {statusbarPadding: true}),
    ServicoModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SerieTreinoDetalhePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
