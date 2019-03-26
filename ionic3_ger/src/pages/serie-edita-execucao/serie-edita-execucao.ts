import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { ExecucaoItemSerie, ExecucaoItemSerieApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-serie-edita-execucao',
  templateUrl: 'serie-edita-execucao.html'
})
export class SerieEditaExecucaoPage {
  item: ExecucaoItemSerie;

  constructor(public navCtrl: NavController, public srv: ExecucaoItemSerieApi, 
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
    this.srv.obtemPrimeiro()
      .subscribe((result: ExecucaoItemSerie) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'SerieEditaExecucaoPage');
  }
  
}
