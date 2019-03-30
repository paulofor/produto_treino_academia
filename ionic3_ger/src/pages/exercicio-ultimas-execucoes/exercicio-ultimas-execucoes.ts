


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { ExercicioUltimasExecucoesPageBase } from './exercicio-ultimas-execucoes-base';

import { Exercicio, ExercicioApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-exercicio-ultimas-execucoes',
  templateUrl: 'exercicio-ultimas-execucoes.html'
})
export class ExercicioUltimasExecucoesPage extends ExercicioUltimasExecucoesPageBase {



  constructor(protected navCtrl: NavController, protected srv: ExercicioApi,
    protected screenshot: Screenshot) {
    super(navCtrl, srv, screenshot);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioUltimasExecucoesPage');
    this.carregaPrototipo();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioUltimasExecucoesPage');
  }
  
 

  
}
