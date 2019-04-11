import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { ItemSerie, ItemSerieApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-cadastra-item-serie',
  templateUrl: 'cadastra-item-serie.html'
})
export class CadastraItemSeriePage {
  item: ItemSerie;

  constructor(public navCtrl: NavController, public srv: ItemSerieApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CadastraItemSeriePage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad CadastraItemSeriePage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: ItemSerie) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'CadastraItemSeriePage');
  }
  
}
