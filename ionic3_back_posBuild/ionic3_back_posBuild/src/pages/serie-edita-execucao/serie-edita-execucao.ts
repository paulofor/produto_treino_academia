import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { ItemSerie, ItemSerieApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-serie-edita-execucao',
  templateUrl: 'serie-edita-execucao.html'
})
export class SerieEditaExecucaoPage {
  item: ItemSerie;

  constructor(public navCtrl: NavController, public srv: ItemSerieApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SerieEditaExecucaoPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad SerieEditaExecucaoPage');
  }
  
  carregaItem() {
    var filtro = { 'where' : { 'id' : 1 }} ;
    this.srv.obtemElemento(filtro)
      .subscribe((result: ItemSerie) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'SerieEditaExecucaoPage');
  }
  
}
