
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ConsultaListaDiaTreinoPageBase } from './consulta-lista-dia-treino-base';
import { DiaTreinoApi, LoopBackFilter } from '../../shared/sdk';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-consulta-lista-dia-treino',
  templateUrl: 'consulta-lista-dia-treino.html'
})
export class ConsultaListaDiaTreinoPage extends ConsultaListaDiaTreinoPageBase {

  inicializacao() {
  }

  constructor(public navCtrl: NavController, protected srv: DiaTreinoApi, protected storage: Storage) {
    super(navCtrl, srv, storage);
  }


  protected getFiltro(): LoopBackFilter {
    return {"include" : "serieTreino" , "order" :  "data desc" };
  }
  
}
