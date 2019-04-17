
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaSerieTreinoPageBase } from './lista-serie-treino-base';
import { SerieTreinoApi, LoopBackFilter } from '../../shared/sdk';


@IonicPage()
@Component({
  selector: 'page-lista-serie-treino',
  templateUrl: 'lista-serie-treino.html'
})
export class ListaSerieTreinoPage extends ListaSerieTreinoPageBase {
  protected inicializacao() {
   
  }

  constructor(public navCtrl: NavController, protected srv: SerieTreinoApi) {
    super(navCtrl, srv);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }
  
}
