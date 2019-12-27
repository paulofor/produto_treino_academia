import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura } from '../../shared/assinatura';
import { PagSeguroAssinaturaDadoClientePage } from '../pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente';
import { DatePipe } from '@angular/common';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';

/**
 * Generated class for the PagSeguroAssinaturaDadoIdentificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-dado-identificacao',
  templateUrl: 'pag-seguro-assinatura-dado-identificacao.html',
})
export class PagSeguroAssinaturaDadoIdentificacaoPage {


  private chavePagina : string = '3e7a39e09eec3244e6f75189eff5db97e3318bae';

  erroNome: string;
  erroEmail: string;
  erroNomeMsg: string;
  erroTelDDD: string;
  erroTelNumero: string;
  erroCpf: string;
  erroNascimento: string;

  dataNascimento: Date;

  sender = {
    "name": "",
    "email": "",

    "hash": "",
    "phone": {
      "areaCode": "",
      "number": ""
    },
    "address": {
      "street": "",
      "number": "",
      "complement": "",
      "district": "",
      "city": "",
      "state": "",
      "country": "BRA",
      "postalCode": ""
    },
    "documents": [
      {
        "type": "CPF",
        "value": ""
      }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,  protected fcmSrv: AcessaFcmService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaDadoIdentificacaoPage');
    this.inicializacao();
    this.fcmSrv.registraVisitaPagina(this.chavePagina);
  }

  inicializacao() {
    this.sender = Assinatura.sender;
    this.dataNascimento = new Date(2014, 1, 1);
    console.log('Data Nascimento' , this.dataNascimento);
  }

  avancar() {
    var datePipe: DatePipe = new DatePipe('en-US');
    Assinatura.paymentMethod.creditCard.holder.birthDate = datePipe.transform(this.dataNascimento, 'dd/MM/yyyy');
    console.log('PagSeguroAssinaturaDadoIdentificacaoPage:Assinatura: ', Assinatura);
    if (this.validacao()) {
      this.navCtrl.push(PagSeguroAssinaturaDadoClientePage);
    }
  }

  preenhcer() {
    this.sender.name = 'Paulo Lopes';
    //this.sender.email = 'paforest1970@gmail.com';
    this.sender.email = 'paforest1970@sandbox.pagseguro.com.br';
    this.sender.phone.areaCode = '21';
    this.sender.phone.number = '992902732';
    this.sender.documents[0].value = '01114740780'
  }

  validacao(): boolean {
    let saida = true;
    if (!this.sender.name) {
      this.erroNome = "Coloque seu nome";
      saida = false;
    } else {
      this.erroNome = null;
    }
    if (!this.sender.email) {
      this.erroEmail = "Coloque seu email";
      saida = false;
    } else {
      this.erroEmail = null;
    }
    if (!this.sender.phone.areaCode) {
      this.erroTelDDD = "Coloque o DDD do seu telefone";
      saida = false;
    } else {
      this.erroTelDDD = null;
    }
    if (!this.sender.phone.number) {
      this.erroTelNumero = "Coloque seu número de telefone";
      saida = false;
    } else {
      this.erroTelNumero = null;
    }
    if (!this.sender.documents[0].value) {
      this.erroCpf = "Coloque seu cpf";
      saida = false;
    } else {
      this.erroCpf = null;
    }
    if (!this.dataNascimento) {
      this.erroNascimento = "Coloque sua data de nascimento";
      saida = false;
    } else {
      this.erroNascimento = null;
    }
    return saida;
  }

}
