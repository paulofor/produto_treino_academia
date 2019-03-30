


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { Exercicio, ExercicioApi } from '../../shared/sdk';


export abstract class ExercicioUltimasExecucoesPageBase {

  protected item: Exercicio;

  constructor(protected navCtrl: NavController, protected srv: ExercicioApi, 
  				 protected screenshot: Screenshot) {
  }

  //protected abstract getLista();
  
  protected carrega() {
    this.srv.getExercicioUltimasExecucoesPageLoad()
      .subscribe((result: Exercicio) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }
  
   
  protected carregaPrototipo() {
    this.srv.getExercicioUltimasExecucoesPageLoad()
      .subscribe((result: Exercicio) => {
        console.log('Result-Prototipo', JSON.stringify(result));
        this.item = result;
      });
  }
  
  protected testaFoto() {
    this.screenshot.save('jpg', 100, 'ExercicioUltimasExecucoesPage');
  }

  
}
