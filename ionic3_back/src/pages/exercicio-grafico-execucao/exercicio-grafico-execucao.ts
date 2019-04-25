import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ExercicioGraficoExecucaoPageBase } from './exercicio-grafico-execucao-base';
import { ExercicioApi, LoopBackFilter } from '../../shared/sdk/index';


@IonicPage()
@Component({
  selector: 'page-exercicio-grafico-execucao',
  templateUrl: 'exercicio-grafico-execucao.html'
})
export class ExercicioGraficoExecucaoPage extends ExercicioGraficoExecucaoPageBase {

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: ExercicioApi) {
      super(navParams,navCtrl,srv);
  }
  
  protected filtroLoadId(id: any): LoopBackFilter {
    return { "include" : { "relation" : "listaExecucaoItemSerie"} };
  }
  protected filtroLoadOne(): LoopBackFilter {
    return {};
  }
  
}
