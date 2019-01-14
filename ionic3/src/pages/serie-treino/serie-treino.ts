import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SerieTreino, SerieTreinoApi } from '../../shared/sdk/index';
import { Screenshot } from '@ionic-native/screenshot';

/**
 * Generated class for the SerieTreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serie-treino',
  templateUrl: 'serie-treino.html',
})
export class SerieTreinoPage {

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
    this.screenshot.save('jpg', 80, 'SerieTreinoPage');
  }
}
