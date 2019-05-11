import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Item } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { ItemSerie, ItemSerieApi, Exercicio, ExecucaoItemSerie, CargaPlanejada, GrupoMuscular, GrupoMuscularApi, SerieTreinoApi, ExercicioApi, LoopBackFilter } from '../../shared/sdk';
import { CriaSeriePageBase } from './cria-serie-base';
import { SerieTreinoEdicaoPage } from '../serie-treino-edicao/serie-treino-edicao';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-cria-serie',
  templateUrl: 'cria-serie.html'
})
export class CriaSeriePage extends CriaSeriePageBase {

  qtdeExecucao = 0;

  // Validation error messages that will be displayed for each form field with errors.

  getQtdeExecucao() {
    return 0;
  }


  protected complementaItem(item: any) {
    if (!item.exercicio) {
      item.exercicio = new Exercicio();
      item.exercicio.usuarioId = this.usuario.id;
    }

    if (!item.listaCargaPlanejada) {
      item.listaCargaPlanejada = [];

      //var carga1 = new CargaPlanejada();
      //carga1.ordemRepeticao = 1;
      //item.listaCargaPlanejada.push(carga1);

      //var carga2 = new CargaPlanejada();
      //carga2.ordemRepeticao = 2;
      //item.listaCargaPlanejada.push(carga2);

      //var carga3 = new CargaPlanejada();
      //carga3.ordemRepeticao = 3;
      //item.listaCargaPlanejada.push(carga3);
    }
    this.qtdeExecucao = item.listaCargaPlanejada.length;

    return item;
  }


  protected filtroLoadId(): LoopBackFilter {
    return {};
  }


  protected executaNavegacao(navCtrl: NavController, result: ItemSerie) {
    navCtrl.pop();
  }


  protected inicializacaoComplementos() {
    this.carregaGrupoMuscular();
  }
  protected criaItem(): ItemSerie {

    var item: ItemSerie = new ItemSerie();
    item.exercicio = new Exercicio();
    item.exercicio.usuarioId = this.usuario.id;
    item.listaCargaPlanejada = [];

    //var carga1 = new CargaPlanejada();
    //carga1.ordemRepeticao = 1;
    //carga1.valorCarga = 0;
    //carga1.quantidadeRepeticao = 0;
    //item.listaCargaPlanejada.push(carga1);

    //var carga2 = new CargaPlanejada();
    //carga2.ordemRepeticao = 2;
    //carga2.valorCarga = 0;
    //carga2.quantidadeRepeticao = 0;
    //item.listaCargaPlanejada.push(carga2);

    //var carga3 = new CargaPlanejada();
    //carga3.ordemRepeticao = 3;
    //carga3.valorCarga = 0;
    //carga3.quantidadeRepeticao = 0;
    //item.listaCargaPlanejada.push(carga3);

    //item.serieTreinoId = '';

    return item;
  }



  listaGrupo: GrupoMuscular[];

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: ItemSerieApi,
    public srvSerieTreino: SerieTreinoApi,
    public srvExercicio: ExercicioApi,
    public srvGrupoMuscular: GrupoMuscularApi,
    protected storage: Storage, public fb: FormBuilder
  ) {
    super(navParams, navCtrl, srv, storage, srvSerieTreino, srvExercicio);


    //this.myForm = this.fb.group({
    //  titulo: ['' , [Validators.required]],
    //  grupoMuscularId : ['' , [Validators.required]],
    //  qtdeExecucao : [3, [Validators.required]],
    //  valorCarga : new FormArray([])
    //})


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

  alteraQuantidade(qtde: number) {
    console.log('Qtde: ', JSON.stringify(qtde));
    if (qtde > this.item.listaCargaPlanejada.length) {
      for (let i = this.item.listaCargaPlanejada.length; i < qtde; i++) {
        var novo = new CargaPlanejada();
        novo.ordemRepeticao = (i + 1);
        novo.valorCarga = 0;
        novo.quantidadeRepeticao = 0;
        this.item.listaCargaPlanejada.push(novo);
      }
    }
    if (qtde < this.item.listaCargaPlanejada.length) {
      for (let i = this.item.listaCargaPlanejada.length; i > qtde; i--) {
        this.item.listaCargaPlanejada.splice(i - 1, 1);
      }
    }
    console.log('ListaCarga:', this.item.listaCargaPlanejada);
  }

}
