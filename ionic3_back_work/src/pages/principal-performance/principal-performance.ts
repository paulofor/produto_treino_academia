import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { PrincipalPerformancePageBase } from './principal-performance-base';
import { Storage } from '@ionic/storage';
import { ConsultaListaDiaTreinoPage } from '../consulta-lista-dia-treino/consulta-lista-dia-treino';
import { ConsultaListaExercicioPage } from '../consulta-lista-exercicio/consulta-lista-exercicio';

@IonicPage()
@Component({
  selector: 'page-principal-performance',
  templateUrl: 'principal-performance.html'
})
export class PrincipalPerformancePage extends PrincipalPerformancePageBase {


  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    protected storage: Storage) {
    super(navParams, navCtrl, storage)
  }


  protected inicializacao() {

  }

  consultaData() {
    this.navCtrl.push(ConsultaListaDiaTreinoPage);
  }

  consultaExercicio() {
    this.navCtrl.push(ConsultaListaExercicioPage);
  }

}
