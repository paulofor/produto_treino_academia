


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { ListaExercicioPageBase } from './lista-exercicio-base';

import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { ExercicioCadastroPage } from '../exercicio-cadastro/exercicio-cadastro';

@IonicPage()
@Component({
  selector: 'page-lista-exercicio',
  templateUrl: 'lista-exercicio.html'
})
export class ListaExercicioPage extends ListaExercicioPageBase {



  protected getFiltro() {
    return {};
  }
  protected getPageEdicao(): Page {
    return ExercicioCadastroPage;
  }

  constructor(public navCtrl: NavController, protected srv: ExercicioApi) {
    super(navCtrl,srv);
  }

  alterar(item: Exercicio) {
    this.navCtrl.push(this.getPageEdicao(), {
      item: item
    });
  }




}
