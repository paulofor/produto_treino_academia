


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { ItemSerie, ItemSerieApi } from '../../shared/sdk';


export abstract class SerieListaExecucaoPageBase {
  protected listaItem: ItemSerie[];

  constructor(protected navCtrl: NavController, protected srv: ItemSerieApi, 
  				 protected screenshot: Screenshot) {
  }

  
  protected carregaLista() {
    this.srv.SerieListaExecucaoLoad()
      .subscribe((result: ItemSerie[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
   
  protected carregaListaPrototipo() {
    this.srv.SerieListaExecucaoLoad()
      .subscribe((result: ItemSerie[]) => {
        console.log('Result-Prototipo', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  protected testaFoto() {
    this.screenshot.save('jpg', 100, 'SerieListaExecucaoPage');
  }

  
}
