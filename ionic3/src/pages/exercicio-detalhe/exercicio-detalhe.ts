


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import { Exercicio, ExercicioApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-exercicio-detalhe',
  templateUrl: 'exercicio-detalhe.html'
})
export class ExercicioDetalhePage {
  item: Exercicio;

  constructor(public navCtrl: NavController, public srv: ExercicioApi, public modalCtrl: ModalController) {
    this.srv.obtemPrimeiro()
      .subscribe((result:Exercicio) => {
        this.item = result;
      })
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  addItem() {
  }
  deleteItem(item) {
  }
  openItem(item) {
  }
  
 
  /* 
  addItem() {
    let addModal = this.modalCtrl.create('TelaCriar');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }
  deleteItem(item) {
    this.items.delete(item);
  }
  openItem(item: Item) {
    this.navCtrl.push('TelaDetalhe', {
      item: item
    });
  }
  */
  
}
