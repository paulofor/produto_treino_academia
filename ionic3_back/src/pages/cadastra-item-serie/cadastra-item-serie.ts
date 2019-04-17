
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { CadastraItemSeriePageBase } from './cadastra-item-serie-base';
import { ItemSerieApi, LoopBackFilter, ExercicioApi, Exercicio } from '../../shared/sdk';


@IonicPage()
@Component({
  selector: 'page-cadastra-item-serie',
  templateUrl: 'cadastra-item-serie.html'
})
export class CadastraItemSeriePage extends CadastraItemSeriePageBase {
  
  protected inicializacao() {
    this.carregaListaExercicio();
  }


  listaExercicio: Exercicio[];

  constructor(public navCtrl: NavController, protected srv: ItemSerieApi, 
            private srvExercicio:ExercicioApi) {
    super(navCtrl, srv);
  }

  carregaListaExercicio() {
    this.srvExercicio.find()
      .subscribe((result: Exercicio[]) => {
        this.listaExercicio = result;
      })
  }

  protected getFiltro(): LoopBackFilter {
    return {};
  }


  
}
