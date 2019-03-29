


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { ExecucaoItemSerie, ExecucaoItemSerieApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-exercicio-ultimas-execucoes',
  templateUrl: 'exercicio-ultimas-execucoes.html'
})
export class ExercicioUltimasExecucoesPage {
  listaItem: ExecucaoItemSerie[];

  constructor(public navCtrl: NavController, public srv: ExecucaoItemSerieApi, 
  				 private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioUltimasExecucoesPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioUltimasExecucoesPage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: ExecucaoItemSerie[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  testaFoto() {
    this.screenshot.save('jpg', 100, 'ExercicioUltimasExecucoesPage');
  }

  
}
