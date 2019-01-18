import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { Element } from '@angular/compiler';

/**
 * Generated class for the GraficoExecucaoExercicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grafico-execucao-exercicio',
  templateUrl: 'grafico-execucao-exercicio.html',
})
export class GraficoExecucaoExercicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraficoExecucaoExercicioPage');
  }

  testaFoto() {
    var cv01:HTMLCanvasElement =  <HTMLCanvasElement>document.getElementById('cv01');
    console.log('cv01: ' , JSON.stringify(cv01));
    var dataURL = cv01.toDataURL();
    console.log(dataURL);
    var img1:HTMLImageElement = <HTMLImageElement>document.getElementById('img1');
    cv01.hidden = true;
    img1.src = cv01.toDataURL('png');
    this.screenshot.save('jpg', 100, 'GraficoExecucaoExercicioPage');
  }


  testaFotoFunciona() {
    var cv01 =  document.getElementById('cv01');
    console.log('cv01: ' , JSON.stringify(cv01));
    var dataURL = cv01.toDataURL();
    console.log(dataURL);
    var img1 = document.getElementById('img1');
    cv01.hide();
    img1.src = cv01.toDataURL('png');
    this.screenshot.save('jpg', 100, 'GraficoExecucaoExercicioPage');
  }

  public barChartOptions: any = {
    responsive : true,
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



  public chartHovered(e: any): void {
    console.log(e);
  }

    

}
