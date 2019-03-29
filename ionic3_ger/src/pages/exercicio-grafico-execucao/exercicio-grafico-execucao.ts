import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Exercicio, ExercicioApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-exercicio-grafico-execucao',
  templateUrl: 'exercicio-grafico-execucao.html'
})
export class ExercicioGraficoExecucaoPage {
  item: Exercicio;


  criaImagem() {
    var cv01: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('cv01');
    var img1: HTMLImageElement = <HTMLImageElement>document.getElementById('img1');
    var ctx = cv01.getContext("2d"); 
    img1.src = cv01.toDataURL('png');
    cv01.hidden = true;
  }

  constructor(public navCtrl: NavController, public srv: ExercicioApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioGraficoExecucaoPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioGraficoExecucaoPage');
  }
  
  carregaItem() {
    var filtro = { 'where' : { 'id' : 1 }} ;
    this.srv.obtemElemento(filtro)
      .subscribe((result: Exercicio) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ExercicioGraficoExecucaoPage');
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
