


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import { RegistroPeso, RegistroPesoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-registro-peso-lista',
  templateUrl: 'registro-peso-lista.html'
})
export class RegistroPesoListaPage {
  currentItems: RegistroPeso[];

  constructor(public navCtrl: NavController, public srv: RegistroPesoApi, public modalCtrl: ModalController) {
    this.srv.obtemLista()
      .subscribe((result:RegistroPeso[]) => {
        this.currentItems = result;
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
