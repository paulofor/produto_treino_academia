import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

/**
 * Generated class for the ListaExercicioExecucaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-exercicio-execucao',
  templateUrl: 'lista-exercicio-execucao.html',
})
export class ListaExercicioExecucaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaExercicioExecucaoPage');
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ListaExercicioExecucaoPage');
  }

}
