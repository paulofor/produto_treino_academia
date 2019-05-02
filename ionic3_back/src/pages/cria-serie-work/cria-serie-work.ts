import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { CriaSerieWorkPageBase } from './cria-serie-work-base';
import { ItemSerie, ItemSerieApi, LoopBackFilter, SerieTreinoApi, ExercicioApi } from '../../shared/sdk';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-cria-serie-work',
  templateUrl: 'cria-serie-work.html'
})
export class CriaSerieWorkPage extends CriaSerieWorkPageBase {


  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ItemSerieApi, 
				protected storage: Storage,
				public srvSerieTreino : SerieTreinoApi,
				public srvExercicio : ExercicioApi,
  				) {
            super(navParams,navCtrl,srv,storage,srvSerieTreino,srvExercicio);
  }

  protected inicializacaoComplementos() {
    throw new Error("Method not implemented.");
  }
  protected criaItem(): ItemSerie {
    throw new Error("Method not implemented.");
  }
  protected executaNavegacao(navCtrl: NavController, result: ItemSerie) {
    throw new Error("Method not implemented.");
  }
  protected filtroLoadId(id: any): LoopBackFilter {
    throw new Error("Method not implemented.");
  }
  protected complementaItem(novo: ItemSerie): ItemSerie {
    throw new Error("Method not implemented.");
  }

  
}
