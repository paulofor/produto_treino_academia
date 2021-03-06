import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { ExecucaoItemTreinoPage } from '../pages/execucao-item-treino/execucao-item-treino';
import { CadastroExercicioPage } from '../pages/cadastro-exercicio/cadastro-exercicio';
import { CriaSeriePage } from '../pages/cria-serie/cria-serie';
import { ListaExercicioExecucaoPage } from '../pages/lista-exercicio-execucao/lista-exercicio-execucao';
import { GraficoExecucaoExercicioPage } from '../pages/grafico-execucao-exercicio/grafico-execucao-exercicio';
import { SerieTreinoPage } from '../pages/serie-treino/serie-treino';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  public theme: String = 'green-and-blue-theme';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Uso Treino - Série Treino', component: SerieTreinoPage },
      { title: 'Uso Treino - Execucao Item Treino', component: ExecucaoItemTreinoPage },
      { title: 'Monta Série - Cadastro Exercicio', component: CadastroExercicioPage },
      { title: 'Monta Série - Cria Serie', component: CriaSeriePage },
      { title: 'Acompanhamento - Lista Exercicio', component: ListaExercicioExecucaoPage },
      { title: 'Acompanhamento -Grafico Execucao Exercicio', component: GraficoExecucaoExercicioPage }
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
