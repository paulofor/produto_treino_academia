import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ExercicioGraficoExecucaoPageBase } from './exercicio-grafico-execucao-base';
import { ExercicioApi, LoopBackFilter } from '../../shared/sdk/index';
import { DatePipe } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { Storage } from '@ionic/storage';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePtBr);

@IonicPage()
@Component({
  selector: 'page-exercicio-grafico-execucao',
  templateUrl: 'exercicio-grafico-execucao.html'
})
export class ExercicioGraficoExecucaoPage extends ExercicioGraficoExecucaoPageBase {


  protected existeDadosGrafico(): boolean {
    return this.item.listaExecucaoItemSerie.length>0;
  }


  protected extraiValores(detalhe: any): number[] {
    var saida:number[] = [];
    for (let i=0; i < detalhe.listaExecucaoCarga.length; i++) {
      saida.push(detalhe.listaExecucaoCarga[i].valorCarga);
    }
    return saida;
  }
  protected obtemTituloSerie(): string[] {
    var saida:string[] = [];
    for (let i=0; i < this.item.listaExecucaoItemSerie[0].listaExecucaoCarga.length; i++) {
      saida.push('Repetição ' + (i+1));
    }
    return saida;
  }

  protected getListaGrafico() {
   return this.item.listaExecucaoItemSerie;
  }
  protected extraiRotulo(detalhe: any): string {
    var dado = new DatePipe('pt-BR').transform(detalhe.dataHoraFinalizacao, 'dd/MM');
    return dado;
  }
 


  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: ExercicioApi, protected storage: Storage) {
    super(navParams, navCtrl, srv, storage);
  }

  protected filtroLoadId(id: any): LoopBackFilter {
    return {
      "include":
      {
        "relation": "listaExecucaoItemSerie",
        "scope": {
          "order" : "dataHoraFinalizacao desc",
          "include": {
            "relation": "listaExecucaoCarga", "scope": { "order": "sequencia" }
          }
        }
      }
    };
  }
  protected filtroLoadOne(): LoopBackFilter {
    return {};
  }

  protected posInicializaItem() {
    //var saida:string[] = [];
    //for (let i=0; i<this.item.listaExecucaoItemSerie.length; i++) {
    //  var dado = new DatePipe('pt-BR').transform(this.item.listaExecucaoItemSerie[i].dataHoraFinalizacao, 'dd/MM');
    //  saida.push(dado);
    //}
    //this.rotulos=  saida;
    //console.log('rotulos:' , this.rotulos);
    // -------
    //var saida2:any[] = [];
    //for (let i=0; i<this.item.listaExecucaoItemSerie.length; i++) {
    //  for (let x=0; x<this.item.listaExecucaoItemSerie[i].listaExecucaoCarga.length;x++) {
    //    var valor:number = this.item.listaExecucaoItemSerie[i].listaExecucaoCarga[x].valorCarga;
    //    if (i==0) {
    //      var novoDado = {'data' : [valor] , 'label' : 'Repeticao ' + (x+1)};
    //      saida2.push(novoDado);
    //    } else {
    //      var itemDado:any = saida2[x];
    //      itemDado.data.push(valor);
    //    }
    //  } 
    //}
    //this.dados = saida2;
    //console.log('dados:', JSON.stringify(this.dados));
  }

  protected preInicializaItem() {

  }





}
