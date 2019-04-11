


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { SerieListaExecucaoPageBase } from './serie-lista-execucao-base';

import { DiaTreino, DiaTreinoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-serie-lista-execucao',
  templateUrl: 'serie-lista-execucao.html'
})
export class SerieListaExecucaoPage extends SerieListaExecucaoPageBase {



  constructor(protected navCtrl: NavController, protected srv: DiaTreinoApi,
    protected screenshot: Screenshot) {
    super(navCtrl, srv, screenshot);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SerieListaExecucaoPage');
    this.carregaPrototipo();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad SerieListaExecucaoPage');
  }
  
 

  
}
