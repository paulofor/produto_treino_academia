import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';
import { Screenshot } from '@ionic-native/screenshot';

@IonicPage()
@Component({
  selector: 'page-serie-treino-detalhe',
  templateUrl: 'serie-treino-detalhe.html'
})
export class SerieTreinoDetalhePage {
  item: SerieTreino;

  constructor(public navCtrl: NavController, public srv: SerieTreinoApi, 
    public modalCtrl: ModalController, private screenshot: Screenshot) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SerieTreinoDetalhePage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad SerieTreinoDetalhePage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: SerieTreino) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 80, 'SerieTreinoDetalhePage');
  }
}
