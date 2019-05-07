import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { SerieTreino, SerieTreinoApi, LoopBackFilter, ItemSerie } from '../../shared/sdk';
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
      'include':
      {
        'relation': 'listaItemSerie', scope: {
          'include': [
            'exercicio',
            { 'relation': 'listaCargaPlanejada', 'order': 'ordemRepeticao' }
          ]
        }
      }
    };
  }


  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: SerieTreinoApi, protected storage:Storage) {
    super(navParams, navCtrl, srv, storage);
  }


  novoRelacionado() {
    var novoRel: ItemSerie = new ItemSerie();
    novoRel.serieTreinoId = this.item.id;
    this.navCtrl.push(CriaSeriePage, {
      item: novoRel
    })
  }


}
