


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { ExercicioUltimasExecucoesPageBase } from './exercicio-ultimas-execucoes-base';

import { Exercicio, ExercicioApi, LoopBackFilter } from '../../shared/sdk';
import { Page } from 'ionic-angular/navigation/nav-util';

@IonicPage()
@Component({
  selector: 'page-exercicio-ultimas-execucoes',
  templateUrl: 'exercicio-ultimas-execucoes.html'
})
export class ExercicioUltimasExecucoesPage extends ExercicioUltimasExecucoesPageBase {


	constructor(public navCtrl: NavController, protected srv: ExercicioApi) {
    super(navCtrl,srv);
	}

  protected getPageEdicao(): Page {
    throw new Error("Method not implemented.");
  }

	protected getFiltro():LoopBackFilter {
    	return {};
	}



 

  
}
