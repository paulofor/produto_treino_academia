


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-serie-treino-detalhe',
  templateUrl: 'serie-treino-detalhe.html'
})
export class SerieTreinoDetalhePage {
  item: SerieTreino;

  constructor(public navCtrl: NavController, public srv: SerieTreinoApi, public modalCtrl: ModalController) {
    this.srv.obtemPrimeiro()
      .subscribe((result:SerieTreino) => {
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
