


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { ItemSerie, ItemSerieApi } from '../../shared/sdk';
import { SerieListaExecucaoPageBase } from './serie-lista-execucao-base';

@IonicPage()
@Component({
  selector: 'page-serie-lista-execucao',
  templateUrl: 'serie-lista-execucao.html'
})
export class SerieListaExecucaoPage extends SerieListaExecucaoPageBase {


  constructor(protected navCtrl: NavController, protected srv: ItemSerieApi,
    protected screenshot: Screenshot) {
    super(navCtrl, srv, screenshot);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SerieListaExecucaoPage');
  }





}
