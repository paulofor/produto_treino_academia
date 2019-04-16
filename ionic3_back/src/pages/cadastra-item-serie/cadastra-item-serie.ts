
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { CadastraItemSeriePageBase } from './cadastra-item-serie-base';
import { ItemSerieApi, LoopBackFilter } from '../../shared/sdk';


@IonicPage()
@Component({
  selector: 'page-cadastra-item-serie',
  templateUrl: 'cadastra-item-serie.html'
})
export class CadastraItemSeriePage extends CadastraItemSeriePageBase {

  constructor(public navCtrl: NavController, protected srv: ItemSerieApi) {
    super(navCtrl, srv);
  }


  protected getPageEdicao(): Page {
    throw new Error("CadastraItemSeriePage.getPageEdicao() nao implementado.");
  }

  protected getFiltro(): LoopBackFilter {
    return {};
  }
  
}
