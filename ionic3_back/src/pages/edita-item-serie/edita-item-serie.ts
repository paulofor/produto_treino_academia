import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { ItemSerie, ItemSerieApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-edita-item-serie',
  templateUrl: 'edita-item-serie.html'
})
export class EditaItemSeriePage {
  item: ItemSerie;

  constructor(public navCtrl: NavController, public srv: ItemSerieApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter EditaItemSeriePage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad EditaItemSeriePage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: ItemSerie) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'EditaItemSeriePage');
  }
  
}
