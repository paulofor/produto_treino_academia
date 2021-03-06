
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
	
      { title: 'SerieListaExecucao' , component: SerieListaExecucaoPage},
	
      { title: 'SerieEditaExecucao' , component: SerieEditaExecucaoPage},
	
      { title: 'CadastraItemSerie' , component: CadastraItemSeriePage},
	
      { title: 'ExercicioGraficoExecucao' , component: ExercicioGraficoExecucaoPage},
	
      { title: 'ExercicioUltimasExecucoes' , component: ExercicioUltimasExecucoesPage},
	
      { title: 'ExercicioCadastro' , component: ExercicioCadastroPage},
	
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
