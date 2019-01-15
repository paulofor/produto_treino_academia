import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

/**
 * Generated class for the ExecucaoItemTreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-execucao-item-treino',
  templateUrl: 'execucao-item-treino.html',
})
export class ExecucaoItemTreinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExecucaoItemTreinoPage');
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ExecucaoItemTreinoPage');
  }

}
