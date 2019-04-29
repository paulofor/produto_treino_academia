
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SerieListaExecucaoPage } from '../pages/serie-lista-execucao/serie-lista-execucao';
import { SerieEditaExecucaoPage } from '../pages/serie-edita-execucao/serie-edita-execucao';
import { CadastraItemSeriePage } from '../pages/cadastra-item-serie/cadastra-item-serie';
import { ExercicioGraficoExecucaoPage } from '../pages/exercicio-grafico-execucao/exercicio-grafico-execucao';
import { ConsultaListaDiaTreinoPage } from '../pages/consulta-lista-dia-treino/consulta-lista-dia-treino';
import { ExercicioCadastroPage } from '../pages/exercicio-cadastro/exercicio-cadastro';
import { ListaExercicioPage } from '../pages/lista-exercicio/lista-exercicio';
import { ListaSerieTreinoPage } from '../pages/lista-serie-treino/lista-serie-treino';
import { EditaItemSeriePage } from '../pages/edita-item-serie/edita-item-serie';
import { CriaSeriePage } from '../pages/cria-serie/cria-serie';
import { InicioTreinoDiaPage } from '../pages/inicio-treino-dia/inicio-treino-dia';
import { SerieTreinoEdicaoPage } from '../pages/serie-treino-edicao/serie-treino-edicao';
import { ExecutaTreinoPage } from '../pages/executa-treino/executa-treino';
import { ConsultaListaExercicioPage } from '../pages/consulta-lista-exercicio/consulta-lista-exercicio';
import { DetalheDiaTreinoPage } from '../pages/detalhe-dia-treino/detalhe-dia-treino';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
	
      { title: 'Consulta Dia*' , component: ConsultaListaDiaTreinoPage},
	
      { title: 'Exercicios' , component: ListaExercicioPage},
	
      { title: 'Series*' , component: ListaSerieTreinoPage},
	
      { title: 'Inicia Treino*' , component: InicioTreinoDiaPage},
	
      { title: 'Consulta Exerc*' , component: ConsultaListaExercicioPage},
	
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
