import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { DiaTreino, DiaTreinoApi, LoopBackFilter, SerieTreinoApi, ItemSerie, ExecucaoItemSerieApi, ExecucaoItemSerie, CargaPlanejada, ExecucaoCarga } from '../../shared/sdk';
import { ExecutaTreinoPageBase } from './executa-treino-base';

@IonicPage()
@Component({
  selector: 'page-executa-treino',
  templateUrl: 'executa-treino.html'
})
export class ExecutaTreinoPage extends ExecutaTreinoPageBase {

  protected resultadoSubmit(result: ExecucaoItemSerie) {
    //throw new Error("Method not implemented.");
  }

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: DiaTreinoApi,
    public srvPut: ExecucaoItemSerieApi) {

    super(navParams, navCtrl, srv, srvPut);
    let index = this.navCtrl.length() - 1;
    this.navCtrl.remove(index);
  }


  protected filtroLoadId(id: number): LoopBackFilter {
    return {
      "include":
      {
        "relation": "serieTreino", "scope":
        {
          "include":
          {
            "relation": "listaItemSerie", "scope":
            {
              "include": [
                {
                  "relation": "exercicio"
                },
                {
                  "relation": "listaExecucaoItemSerie", "scope": { "where": { "diaTreinoId": id } }
                },
                {
                  "relation": "listaCargaPlanejada", "scope": { "order": "ordemRepeticao" }
                }
              ]
            }
          }
        }
      }
    };
  }

  protected filtroLoadOne(): LoopBackFilter {
    return {};
  }



  protected concluido(itemSerie: ItemSerie) {
    console.log('Item: ' , itemSerie);
    var execucao:ExecucaoItemSerie = new ExecucaoItemSerie();
    execucao.diaTreinoId = this.item.id;
    execucao.exercicioId = itemSerie.exercicioId;
    execucao.itemSerieId = itemSerie.id;
    execucao.dataHoraFinalizacao = new Date();
    execucao.listaExecucaoCarga = [];

    itemSerie.listaCargaPlanejada.forEach((carga:CargaPlanejada) => {
      var exeCarga: ExecucaoCarga = new ExecucaoCarga();
      exeCarga.dataHora = execucao.dataHoraFinalizacao;
      exeCarga.valorCarga = carga.valorCarga;
      exeCarga.repeticao = carga.quantidadeRepeticao;
      exeCarga.sequencia = carga.ordemRepeticao;
      execucao.listaExecucaoCarga.push(exeCarga); 
    })
    this.submit(execucao);
  }


  /*
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
  */

  getQuantidadeExecutado(): number {
    var total = 0;
    this.item.serieTreino.listaItemSerie.forEach((itemSerie: ItemSerie) => {
      if (itemSerie.listaExecucaoItemSerie.length > 0) total++;
    })
    return total;
  }

}
