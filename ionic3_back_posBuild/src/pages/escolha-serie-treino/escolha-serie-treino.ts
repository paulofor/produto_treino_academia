
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { EscolhaSerieTreinoPageBase } from './escolha-serie-treino-base';
import { SerieTreinoApi, LoopBackFilter } from '../../shared/sdk';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-escolha-serie-treino',
  templateUrl: 'escolha-serie-treino.html'
})
export class EscolhaSerieTreinoPage extends EscolhaSerieTreinoPageBase {

  inicializacao() {
  }

  constructor(public navCtrl: NavController, protected srv: SerieTreinoApi,protected storage: Storage) {
    super(navCtrl,srv,storage);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }
  
}
