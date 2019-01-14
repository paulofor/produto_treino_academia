import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

/**
 * Generated class for the GraficoExecucaoExercicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grafico-execucao-exercicio',
  templateUrl: 'grafico-execucao-exercicio.html',
})
export class GraficoExecucaoExercicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraficoExecucaoExercicioPage');
  }

  testaFoto() {
    this.screenshot.save('jpg', 80, 'CadastroExercicioPage');
  }
}