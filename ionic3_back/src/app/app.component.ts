
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SerieListaExecucaoPage } from '../pages/serie-lista-execucao/serie-lista-execucao';
import { SerieEditaExecucaoPage } from '../pages/serie-edita-execucao/serie-edita-execucao';
import { CadastraItemSeriePage } from '../pages/cadastra-item-serie/cadastra-item-serie';
import { ExercicioGraficoExecucaoPage } from '../pages/exercicio-grafico-execucao/exercicio-grafico-execucao';
import { ExercicioUltimasExecucoesPage } from '../pages/exercicio-ultimas-execucoes/exercicio-ultimas-execucoes';
import { ExercicioCadastroPage } from '../pages/exercicio-cadastro/exercicio-cadastro';
import { ListaExercicioPage } from '../pages/lista-exercicio/lista-exercicio';
import { ListaSerieTreinoPage } from '../pages/lista-serie-treino/lista-serie-treino';
import { EditaItemSeriePage } from '../pages/edita-item-serie/edita-item-serie';
import { CriaSeriePage } from '../pages/cria-serie/cria-serie';
import { ExecutaTreinoPage } from '../pages/executa-treino/executa-treino';
import { SerieTreinoEdicaoPage } from '../pages/serie-treino-edicao/serie-treino-edicao';
import { TesteForm01Page } from '../pages/teste-form01/teste-form01';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
	
      { title: 'SerieListaExecu' , component: TesteForm01Page},
	
      { title: 'SerieEditaExecu' , component: SerieEditaExecucaoPage},
	
      { title: 'ExercicioGrafic' , component: ExercicioGraficoExecucaoPage},
	
      { title: 'ExercicioUltima' , component: ExercicioUltimasExecucoesPage},
	
      { title: 'Exercicios' , component: ListaExercicioPage},
	
      { title: 'Series' , component: ListaSerieTreinoPage},
	
      { title: 'Cria Serie*' , component: CriaSeriePage},
	
      { title: 'Inicia Treino*' , component: ExecutaTreinoPage},
	
     ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
