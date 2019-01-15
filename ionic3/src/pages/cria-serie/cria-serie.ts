import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

/**
 * Generated class for the CriaSeriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cria-serie',
  templateUrl: 'cria-serie.html',
})
export class CriaSeriePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriaSeriePage');
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'CriaSeriePage');
  }
}
