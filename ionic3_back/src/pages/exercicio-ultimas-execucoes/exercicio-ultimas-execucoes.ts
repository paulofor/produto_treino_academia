


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { ExercicioUltimasExecucoesPageBase } from './exercicio-ultimas-execucoes-base';

import { Exercicio, ExercicioApi, LoopBackFilter } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-exercicio-ultimas-execucoes',
  templateUrl: 'exercicio-ultimas-execucoes.html'
})
export class ExercicioUltimasExecucoesPage extends ExercicioUltimasExecucoesPageBase {

	protected getFiltro():LoopBackFilter {
    	return {};
	}



  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioUltimasExecucoesPage');
    this.carregaPrototipo();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioUltimasExecucoesPage');
  }
  
 

  
}
