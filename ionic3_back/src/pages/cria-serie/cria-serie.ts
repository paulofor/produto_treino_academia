import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { ItemSerie, ItemSerieApi, Exercicio, ExecucaoItemSerie, CargaPlanejada, GrupoMuscular, GrupoMuscularApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-cria-serie',
  templateUrl: 'cria-serie.html'
})
export class CriaSeriePage {
  
  item: ItemSerie;
  listaGrupo : GrupoMuscular[];

  constructor(public navCtrl: NavController, public srv: ItemSerieApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController, private srvGrupoMuscular: GrupoMuscularApi) {
  }

  criaItemSerie() {
    this.item = new ItemSerie();
    this.item.exercicio = new Exercicio();
    this.item.listaCargaPlanejada = [];

    var carga1 = new CargaPlanejada();
    carga1.ordemRepeticao = 1;
    this.item.listaCargaPlanejada.push(carga1);

    var carga2 = new CargaPlanejada();
    carga2.ordemRepeticao = 2;
    this.item.listaCargaPlanejada.push(carga2);

    var carga3 = new CargaPlanejada();
    carga3.ordemRepeticao = 3;
    this.item.listaCargaPlanejada.push(carga3);

    this.item.serieTreinoId = 0;
  }

  carregaItem() {
    this.srvGrupoMuscular.find()
      .subscribe((result:GrupoMuscular[]) => {
        console.log('Result: ' , result);
        this.listaGrupo = result;
      })
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CriaSeriePage');
    this.carregaItem();
    this.criaItemSerie();
  }

  submit() {
    console.log('Item: ' , this.item);
    this.srv.create(this.item)
      .subscribe((resultado) => {
        this.navCtrl.pop();
      })
  }



  
}
