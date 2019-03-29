


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { ExecucaoItemSerie, ExecucaoItemSerieApi } from '../../shared/sdk';


export abstract class ExercicioUltimasExecucoesPageBase {
  protected listaItem: ExecucaoItemSerie[];

  constructor(protected navCtrl: NavController, protected srv: ExecucaoItemSerieApi, 
  				 protected screenshot: Screenshot) {
  }

  
  protected carregaLista() {
    this.srv.ExercicioUltimasExecucoesLoad()
      .subscribe((result: ExecucaoItemSerie[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
   
  protected carregaListaPrototipo() {
    this.srv.ExercicioUltimasExecucoesLoad()
      .subscribe((result: ExecucaoItemSerie[]) => {
        console.log('Result-Prototipo', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  protected testaFoto() {
    this.screenshot.save('jpg', 100, 'ExercicioUltimasExecucoesPage');
  }

  
}
