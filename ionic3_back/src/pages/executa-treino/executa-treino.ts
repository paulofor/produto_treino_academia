


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { DiaTreino, DiaTreinoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-executa-treino',
  templateUrl: 'executa-treino.html'
})
export class ExecutaTreinoPage {
  listaItem: DiaTreino[];

  constructor(public navCtrl: NavController, public srv: DiaTreinoApi, 
  				 private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ExecutaTreinoPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExecutaTreinoPage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: DiaTreino[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  testaFoto() {
    this.screenshot.save('jpg', 100, 'ExecutaTreinoPage');
  }

  
}
