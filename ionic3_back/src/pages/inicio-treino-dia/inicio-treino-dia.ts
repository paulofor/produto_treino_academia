import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-inicio-treino-dia',
  templateUrl: 'inicio-treino-dia.html'
})
export class InicioTreinoDiaPage {
  item: SerieTreino;

  constructor(public navCtrl: NavController, public srv: SerieTreinoApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter InicioTreinoDiaPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad InicioTreinoDiaPage');
  }
  
  carregaItem() {
    var filtro = { 'where' : { 'id' : 1 }} ;
    this.srv.obtemElemento(filtro)
      .subscribe((result: SerieTreino) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'InicioTreinoDiaPage');
  }
  
}
