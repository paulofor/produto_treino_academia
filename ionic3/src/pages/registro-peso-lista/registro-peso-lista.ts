


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import { RegistroPeso, RegistroPesoApi } from '../../shared/sdk';
import { Screenshot } from '@ionic-native/screenshot';

@IonicPage()
@Component({
  selector: 'page-registro-peso-lista',
  templateUrl: 'registro-peso-lista.html'
})
export class RegistroPesoListaPage {
  listaItem: RegistroPeso[];

  constructor(public navCtrl: NavController, public srv: RegistroPesoApi, 
    public modalCtrl: ModalController, private screenshot: Screenshot) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter RegistroPesoListaPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad RegistroPesoListaPage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: RegistroPeso[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 80, 'RegistroPesoListaPage');
  }
  
}
