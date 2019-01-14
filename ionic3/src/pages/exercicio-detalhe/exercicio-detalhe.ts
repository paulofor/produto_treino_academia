import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { Screenshot } from '@ionic-native/screenshot';

@IonicPage()
@Component({
  selector: 'page-exercicio-detalhe',
  templateUrl: 'exercicio-detalhe.html'
})
export class ExercicioDetalhePage {
  item: Exercicio;

  constructor(public navCtrl: NavController, public srv: ExercicioApi, public modalCtrl: ModalController, private screenshot: Screenshot) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioDetalhePage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioDetalhePage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: Exercicio) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 80, 'CadastroExercicioPage');
  }
}
