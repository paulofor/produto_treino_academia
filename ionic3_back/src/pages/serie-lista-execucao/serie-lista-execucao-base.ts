


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { DiaTreino, DiaTreinoApi } from '../../shared/sdk';


export abstract class SerieListaExecucaoPageBase {

  protected item: DiaTreino;

  constructor(protected navCtrl: NavController, protected srv: DiaTreinoApi, 
  				 protected screenshot: Screenshot) {
  }

  //protected abstract getLista();
  
  protected carrega() {
    this.srv.getSerieListaExecucaoPageLoad()
      .subscribe((result: DiaTreino) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }
  
   
  protected carregaPrototipo() {
    this.srv.getSerieListaExecucaoPageLoad()
      .subscribe((result: DiaTreino) => {
        console.log('Result-Prototipo', JSON.stringify(result));
        this.item = result;
      });
  }
  
  protected testaFoto() {
    this.screenshot.save('jpg', 100, 'SerieListaExecucaoPage');
  }

  
}
