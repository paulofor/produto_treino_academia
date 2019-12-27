
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AcessaFcmService } from '../servico/acessa-fcm-service';
import { VERSAO_APP_ID } from './const';

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
import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  				private fcmSrv:AcessaFcmService ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
	
      { title: 'Consulta Dia*' , component: ConsultaListaDiaTreinoPage},
	
      { title: 'Cria Serie Work' , component: CriaSerieWorkPage},
	
      { title: 'Series*' , component: ListaSerieTreinoPage},
	
      { title: 'Inicia Treino*' , component: InicioTreinoDiaPage},
	
      { title: 'Consulta Exerc*' , component: ConsultaListaExercicioPage},
	
     ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.fcmSrv.executaValidacao(VERSAO_APP_ID);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}