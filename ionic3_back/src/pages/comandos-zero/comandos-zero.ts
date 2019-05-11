import { IonicPage, NavController } from "ionic-angular";
import { Component } from "@angular/core";
import { ComandosZeroPageBase } from "./comandos-zero-base";
import { Storage } from '@ionic/storage';
import { ListaSerieTreinoPage } from "../lista-serie-treino/lista-serie-treino";

/**
 * Generated class for the GeradorDigicom
 *
 */

@IonicPage()
@Component({
  selector: 'page-comandos-zero',
  templateUrl: 'comandos-zero.html',
})
export class ComandosZeroPage extends ComandosZeroPageBase {

 

  constructor(public navCtrl: NavController, protected storage: Storage) {
    super();
  }


  protected getNomeAplicacao(): string {
    return "Treino 365";
  }


  executaConsulta() {
    console.log('ExecutaConsulta');
  }
  existeConsulta() {
    return true;
  }

  executaDiaTreino() {
    console.log('executaDiaTreino');
  }
  existeDiaTreino() {
    return true;
  }

  executaSerie() {
    //console.log('executaSerie');
    this.navCtrl.push(ListaSerieTreinoPage, {
      
    });
  }
  existeSerie() {
    return true;
  }




}
