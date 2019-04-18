import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Item } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { ItemSerie, ItemSerieApi, Exercicio, ExecucaoItemSerie, CargaPlanejada, GrupoMuscular, GrupoMuscularApi, SerieTreinoApi, ExercicioApi } from '../../shared/sdk';
import { CriaSeriePageBase } from './cria-serie-base';

@IonicPage()
@Component({
  selector: 'page-cria-serie',
  templateUrl: 'cria-serie.html'
})
export class CriaSeriePage extends CriaSeriePageBase {


  protected inicializacaoComplementos() {
    this.carregaGrupoMuscular();
  }
  protected criaItem(): ItemSerie {

    var item:ItemSerie = new ItemSerie();
    item.exercicio = new Exercicio();
    item.listaCargaPlanejada = [];
  
    var carga1 = new CargaPlanejada();
    carga1.ordemRepeticao = 1;
    item.listaCargaPlanejada.push(carga1);
  
    var carga2 = new CargaPlanejada();
    carga2.ordemRepeticao = 2;
    item.listaCargaPlanejada.push(carga2);
  
    var carga3 = new CargaPlanejada();
    carga3.ordemRepeticao = 3;
    item.listaCargaPlanejada.push(carga3);
  
    item.serieTreinoId = 0;

    return item;
  }

 

  listaGrupo: GrupoMuscular[];

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: ItemSerieApi,
    public srvSerieTreino: SerieTreinoApi,
    public srvExercicio: ExercicioApi,
    public srvGrupoMuscular: GrupoMuscularApi
  ) {
  super(navParams, navCtrl, srv, srvSerieTreino, srvExercicio);
}

criaItemSerie() {

}

carregaGrupoMuscular() {
  this.srvGrupoMuscular.find()
    .subscribe((result: GrupoMuscular[]) => {
      console.log('Result: ', result);
      this.listaGrupo = result;
    })
}


  
}
