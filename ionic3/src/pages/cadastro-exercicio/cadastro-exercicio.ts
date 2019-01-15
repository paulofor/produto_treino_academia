import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
/**
 * Generated class for the CadastroExercicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-exercicio',
  templateUrl: 'cadastro-exercicio.html',
})
export class CadastroExercicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private screenshot: Screenshot, public viewCtrl: ViewController) {
  }

  testaFoto() {
    this.screenshot.save('jpg', 80, 'CadastroExercicioPage');
  }

}
