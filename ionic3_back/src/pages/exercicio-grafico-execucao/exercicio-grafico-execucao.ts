import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ExercicioGraficoExecucaoPageBase } from './exercicio-grafico-execucao-base';
import { ExercicioApi, LoopBackFilter } from '../../shared/sdk/index';


@IonicPage()
@Component({
  selector: 'page-exercicio-grafico-execucao',
  templateUrl: 'exercicio-grafico-execucao.html'
})
export class ExercicioGraficoExecucaoPage extends ExercicioGraficoExecucaoPageBase {


  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public srv: ExercicioApi) {
    super(navParams, navCtrl, srv);
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

  }
  protected preInicializaItem() {

  }

  criaImagem() {
    //var cv01: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('cv01');
    //var img1: HTMLImageElement = <HTMLImageElement>document.getElementById('img1');
    //var ctx = cv01.getContext("2d"); 
    //img1.src = cv01.toDataURL('png');
    //cv01.hidden = true;
  }


  public barChartOptions: any = {
    legend: {
      display: true,
      labels: {
        boxWidth: 20,
        boxHeight: 2
      }
    },
    animation: {
      onComplete: this.criaImagem
    },
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public barChartLabels: string[] = ['22/12', '28/12', '02/01', '04/01', '06/01', '08/01', '10/01'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;


  public barChartData: any[] = [
    { data: [30, 30, 30, 30, 30, 35, 35], label: 'Repetição 1' },
    { data: [25, 25, 25, 25, 25, 30, 30], label: 'Repetição 2' },
    { data: [20, 20, 20, 20, 20, 25, 25], label: 'Repetição 3' }
  ];
}
