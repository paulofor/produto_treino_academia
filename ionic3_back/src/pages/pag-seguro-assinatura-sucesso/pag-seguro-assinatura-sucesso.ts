import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaOportunidadePrecoAssinaturaPage } from '../lista-oportunidade-preco-assinatura/lista-oportunidade-preco-assinatura';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';

/**
 * Generated class for the PagSeguroAssinaturaSucessoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-sucesso',
  templateUrl: 'pag-seguro-assinatura-sucesso.html',
})
export class PagSeguroAssinaturaSucessoPage {

  chavePagina = "4802fdf28ddc6301b2748af6a64ab5a136085f12";

  constructor(public navCtrl: NavController, public navParams: NavParams,  protected fcmSrv: AcessaFcmService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaSucessoPage');
    this.fcmSrv.registraVisitaPagina(this.chavePagina);
  }


  iniciar() {
    //this.navCtrl.push(ListaOportunidadePrecoAssinaturaPage);
    this.navCtrl.push(ListaOportunidadePrecoAssinaturaPage).then(() => {
      console.log('Tamanho: ' , this.navCtrl.length());
      console.log('this.navCtrl:' , this.navCtrl);
      let index = 1;
      this.navCtrl.remove(0,this.navCtrl.length()-1);
    });
  }
}
