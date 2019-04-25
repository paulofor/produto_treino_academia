import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { DetalheDiaTreinoPageBase } from './detalhe-dia-treino-base';
import { DiaTreinoApi, LoopBackFilter, ExecucaoItemSerie } from '../../shared/sdk/index';
import { DatePipe } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localePtBr);

@IonicPage()
@Component({
  selector: 'page-detalhe-dia-treino',
  templateUrl: 'detalhe-dia-treino.html'
})
export class DetalheDiaTreinoPage extends DetalheDiaTreinoPageBase {

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: DiaTreinoApi) {
    super(navParams, navCtrl, srv);
  }

  protected filtroLoadId(id: number): LoopBackFilter {
    return { "include": { "relation": "serieTreino", "scope": { "include": { "relation": "listaItemSerie", "scope": { "include": [{ "relation": "exercicio" }, { "relation": "listaExecucaoItemSerie", "scope": { "where": { "diaTreinoId": id } } }] } } } } };;
  }

  protected filtroLoadOne(): LoopBackFilter {
    return {};
  }

  protected getHoraExecucao(listaExecucao: Array<ExecucaoItemSerie>) {
    if (listaExecucao.length == 0) return '-'
    else return new DatePipe('pt-BR').transform(listaExecucao[0].dataHoraFinalizacao, 'hh:mm:ss');;
  }

}