


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { SerieListaExecucaoPageBase } from './serie-lista-execucao-base';

import { DiaTreino, DiaTreinoApi, LoopBackFilter } from '../../shared/sdk';
import { Page } from 'ionic-angular/navigation/nav-util';

@IonicPage()
@Component({
  selector: 'page-serie-lista-execucao',
  templateUrl: 'serie-lista-execucao.html'
})
export class SerieListaExecucaoPage extends SerieListaExecucaoPageBase {

  protected inicializacao() {
  }


  constructor(public navCtrl: NavController, protected srv: DiaTreinoApi) {
    super(navCtrl,srv);
	}
  


  protected getFiltro(): LoopBackFilter {
    return {};
  }



  





}
