
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ConsultaListaExercicioPageBase } from './consulta-lista-exercicio-base';
import { ExercicioApi, LoopBackFilter } from '../../shared/sdk';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-consulta-lista-exercicio',
  templateUrl: 'consulta-lista-exercicio.html'
})
export class ConsultaListaExercicioPage extends ConsultaListaExercicioPageBase {

  inicializacao() {
  }

  constructor(public navCtrl: NavController, protected srv: ExercicioApi, protected storage: Storage) {
    super(navCtrl, srv, storage);
  }


  protected getFiltro(): LoopBackFilter {
    return {};
  }
  
}
