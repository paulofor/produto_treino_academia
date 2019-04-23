import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { DiaTreino, DiaTreinoApi, LoopBackFilter, SerieTreinoApi } from '../../shared/sdk';
import { ExecutaTreinoPageBase } from './executa-treino-base';

@IonicPage()
@Component({
  selector: 'page-executa-treino',
  templateUrl: 'executa-treino.html'
})
export class ExecutaTreinoPage extends ExecutaTreinoPageBase {

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: SerieTreinoApi, private srvDia: DiaTreinoApi) {
      super(navParams,navCtrl,srv);
  }

  protected filtroLoadOne(): LoopBackFilter {
    return { "where": { "ativa": "1" }, "order": "dataUltimaExecucao" };
  }

  protected filtroLoadId(): LoopBackFilter {
    return {};
  }

  iniciaDia() {
    var novo : DiaTreino = new DiaTreino();
    novo.concluido = '0';
    novo.data = new Date();
    novo.serieTreinoId = this.item.id;
    this.srvDia.create(novo)
      .subscribe((novo))


  }


}
