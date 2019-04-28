import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { SerieTreino, SerieTreinoApi, DiaTreinoApi, LoopBackFilter, DiaTreino } from '../../shared/sdk';
import { InicioTreinoDiaPageBase } from './inicio-treino-dia-base';
import { ExecutaTreinoPage } from '../executa-treino/executa-treino';

@IonicPage()
@Component({
  selector: 'page-inicio-treino-dia',
  templateUrl: 'inicio-treino-dia.html'
})
export class InicioTreinoDiaPage extends InicioTreinoDiaPageBase {


  QUATRO_HORAS = 4 * 60 * 60 * 1000;

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: SerieTreinoApi, private srvDia: DiaTreinoApi) {
    super(navParams, navCtrl, srv);
  }

  protected filtroLoadId(id: any): LoopBackFilter {
    return {};
  }
  protected filtroLoadOne(): LoopBackFilter {
    //return {"where" : {"data" :  {gt: Date.now() - this.QUATRO_HORAS} }};
    return { "where": { "ativa": "1" }, "order": "dataUltimaExecucao" };
  }
  protected posInicializaItem() {
  }
  protected preInicializaItem() {
    // findOne da erro quando nao encontra
    this.srvDia.find(this.filtroDia)
      .subscribe((result: DiaTreino[]) => {
        console.log('Dia recuperado: ', result);
        if (result.length>0) {
          this.navCtrl.push(ExecutaTreinoPage, {
            id: result[0].id
          })
        }
      })
  }

  filtroDia: LoopBackFilter = {
    "where": { "data": { gt: Date.now() - this.QUATRO_HORAS } , "order" : "data desc"}
  }


  iniciaDia() {
    var novo: DiaTreino = new DiaTreino();
    novo.concluido = 0;
    novo.data = new Date();
    novo.serieTreinoId = this.item.id;
    this.srvDia.create(novo)
      .subscribe((result: DiaTreino) => {
        this.navCtrl.push(ExecutaTreinoPage, {
          id: result.id
        })
      })
  }

}
