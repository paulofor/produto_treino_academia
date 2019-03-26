


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { ItemSerie, ItemSerieApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-serie-lista-execucao',
  templateUrl: 'serie-lista-execucao.html'
})
export class SerieListaExecucaoPage {
  listaItem: ItemSerie[];

  constructor(public navCtrl: NavController, public srv: ItemSerieApi, 
  				 private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SerieListaExecucaoPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad SerieListaExecucaoPage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: ItemSerie[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  testaFoto() {
    this.screenshot.save('jpg', 100, 'SerieListaExecucaoPage');
  }

  
}
