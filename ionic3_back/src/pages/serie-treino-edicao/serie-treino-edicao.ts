import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { SerieTreino, SerieTreinoApi, LoopBackFilter, ItemSerie, ItemSerieApi } from '../../shared/sdk';
import { SerieTreinoEdicaoPageBase } from './serie-treino-edicao-base';
import { CriaSeriePage } from '../cria-serie/cria-serie';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-serie-treino-edicao',
  templateUrl: 'serie-treino-edicao.html'
})
export class SerieTreinoEdicaoPage extends SerieTreinoEdicaoPageBase {

  protected posInicializaItem() {
  }
  protected preInicializaItem() {
  }

  protected filtroLoadOne() {
    return {};
  }




  protected filtroLoadId(): LoopBackFilter {
    return {
      'counts': 'listaDiaTreino',
      'include':
      {
        'relation': 'listaItemSerie', scope: {
          'order': 'ordemExecucao',
          'include': [
            'exercicio',
            { 'relation': 'listaCargaPlanejada' }
          ]
        }
      }
    };
  }


  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: SerieTreinoApi, protected storage: Storage, private srvItemSerie: ItemSerieApi,
    private alertCtrl: AlertController) {
    super(navParams, navCtrl, srv, storage);
  }


  novoRelacionado() {
    var novoRel: ItemSerie = new ItemSerie();
    novoRel.serieTreinoId = this.item.id;
    this.navCtrl.push(CriaSeriePage, {
      item: novoRel
    })
  }

  altera(item: ItemSerie) {
    this.navCtrl.push(CriaSeriePage, {
      item: item
    })
  }

  exclui(item: ItemSerie) {
    let alert = this.alertCtrl.create({
      title: 'Confirma exclusão',
      message: 'Deseja realmente retirar esse item da série ?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.srvItemSerie.deleteById(item.id)
              .subscribe((result) => {
                this.carregaUsuario();
              })
          }
        }
      ]
    });
    alert.present();
  }

}
