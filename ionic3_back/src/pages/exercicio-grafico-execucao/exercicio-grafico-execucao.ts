import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ExercicioGraficoExecucaoPageBase } from './exercicio-grafico-execucao-base';
import { ExercicioApi, LoopBackFilter } from '../../shared/sdk/index';


@IonicPage()
@Component({
  selector: 'page-exercicio-grafico-execucao',
  templateUrl: 'exercicio-grafico-execucao.html'
})
export class ExercicioGraficoExecucaoPage extends ExercicioGraficoExecucaoPageBase {
 


  protected getRotulos(): string[] {
    return ['22/12', '28/12', '02/01'];
  }
  protected getDataLabel(): any[] {
    return [
      { 'data' : [1,2,3] , 'label': 'repeticao1'},
      { 'data' : [1,2,3] , 'label': 'repeticao2'},
      { 'data' : [1,2,3] , 'label': 'repeticao3'}
    ]
  }

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: ExercicioApi) {
    super(navParams, navCtrl, srv);
  }

  protected filtroLoadId(id: any): LoopBackFilter {
    return {
      "include":
      {
        "relation": "listaExecucaoItemSerie",
        "scope": {
          "order" : "dataHoraFinalizacao desc",
          "include": {
            "relation": "listaExecucaoCarga", "scope": { "order": "sequencia" }
          }
        }
      }
    };
  }
  protected filtroLoadOne(): LoopBackFilter {
    return {};
  }
  protected posInicializaItem() {

  }
  protected preInicializaItem() {

  }





}
