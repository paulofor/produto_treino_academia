import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Exercicio, ExercicioApi, GrupoMuscular } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-exercicio-cadastro',
  templateUrl: 'exercicio-cadastro.html'
})
export class ExercicioCadastroPage {
  item: Exercicio;

  listaGrupoMuscular : GrupoMuscular[] = []

  

  constructor(public navCtrl: NavController, public srv: ExercicioApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioCadastroPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioCadastroPage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: Exercicio) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ExercicioCadastroPage');
  }
  
}
