import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { DiaTreino, DiaTreinoApi, LoopBackFilter, SerieTreinoApi, ItemSerie, ExecucaoItemSerieApi, ExecucaoItemSerie } from '../../shared/sdk';
import { ExecutaTreinoPageBase } from './executa-treino-base';

@IonicPage()
@Component({
  selector: 'page-executa-treino',
  templateUrl: 'executa-treino.html'
})
export class ExecutaTreinoPage extends ExecutaTreinoPageBase {

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: DiaTreinoApi, public srvExecucao: ExecucaoItemSerieApi) {
    super(navParams, navCtrl, srv);

    let index = this.navCtrl.length() - 1;
    this.navCtrl.remove(index);
  }


  protected filtroLoadId(id:number): LoopBackFilter {
    return {"include":{"relation":"serieTreino","scope":{"include":{"relation":"listaItemSerie","scope":{"include":[{"relation":"exercicio"},{"relation":"listaExecucaoItemSerie","scope":{"where":{"diaTreinoId":id}}}]}}}}};;
  }

  protected filtroLoadOne(): LoopBackFilter {
    return {};
  }


  protected concluido(itemSerie: ItemSerie) {
    var execucao: ExecucaoItemSerie = new ExecucaoItemSerie();
    execucao.diaTreinoId = this.item.id;
    execucao.exercicioId = itemSerie.exercicioId;
    execucao.itemSerieId = itemSerie.id;
    execucao.dataHoraFinalizacao = new Date();
    this.srvExecucao.create(execucao)
      .subscribe((result) => {
        this.carregaItem();
      })
  }


  carregaItem() {
    console.log('ExecutaTreinoPageBase:filtro: ', JSON.stringify(this.filtroLoadId(this.item.id)));
    console.log('DiaTreino.findById');
    this.srv.findById(this.item.id, this.filtroLoadId(this.item.id))
      .subscribe(
        (result: DiaTreino) => {
          this.item = result;
          console.log('ExecutaTreinoPageBase.item: ', this.item)
        },
        (erro: any) => console.log('ExecutaTreinoPageBase:LoadId(Erro): ', JSON.stringify(erro))
      )
  }


  getQuantidadeExecutado() : number{
    var total = 0;
    this.item.
    return total;
  }

}
