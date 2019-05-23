import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { DetalheDiaTreinoPageBase } from './detalhe-dia-treino-base';
import { DiaTreinoApi, LoopBackFilter, ExecucaoItemSerie, ItemSerie } from '../../shared/sdk/index';
import { DatePipe } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { Storage } from '@ionic/storage';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localePtBr);

@IonicPage()
@Component({
  selector: 'page-detalhe-dia-treino',
  templateUrl: 'detalhe-dia-treino.html'
})
export class DetalheDiaTreinoPage extends DetalheDiaTreinoPageBase {


  protected posItemLoad() {
    this.item.serieTreino.listaItemSerie.sort( function (item1:ItemSerie, item2:ItemSerie)  {
      if (item1.listaExecucaoItemSerie[0].dataHoraFinalizacao < item2.listaExecucaoItemSerie[0].dataHoraFinalizacao)
        return -1;
      else
        return 1;
    });
    console.log('PosSort:' , this.item);
  }

  protected posInicializaItem() {
  }
  protected preInicializaItem() {
  }

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: DiaTreinoApi, protected storage: Storage) {
    super(navParams, navCtrl, srv, storage);
  }

  protected filtroLoadId(id: number): LoopBackFilter {
    return {
      "include": {
        "relation": "serieTreino", "scope": {
          "include": {
            "relation": "listaItemSerie", "scope": {
              "include": [
                {
                  "relation": "exercicio"
                },
                {
                  "relation": "listaExecucaoItemSerie", "scope": {
                    "order" : "dataHoraFinalizacao" ,
                    "where": { "diaTreinoId": id },
                    "include": {
                      "relation": "listaExecucaoCarga" , "scope" : { "order" : "sequencia"}
                    }
                  }
                }]
            }
          }
        }
      }
    };;
  }

  protected filtroLoadOne(): LoopBackFilter {
    return {};
  }

  protected getHoraExecucao(listaExecucao: Array<ExecucaoItemSerie>) {
    if (listaExecucao.length == 0) return '-'
    else return new DatePipe('pt-BR').transform(listaExecucao[0].dataHoraFinalizacao, 'hh:mm:ss');;
  }

}
