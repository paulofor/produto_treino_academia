import { Component, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura, Cartao } from '../../shared/assinatura';
import { PagSeguroApi } from '../../shared/sdk/services/integracao/PagSeguro';
import { PagSeguroAssinaturaConfirmacaoPage } from '../pag-seguro-assinatura-confirmacao/pag-seguro-assinatura-confirmacao';
import { PagSeguroAssinaturaDadoClientePage } from '../pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';


/**
 * Generated class for the PagSeguroAssinaturaDadoCartaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var PagSeguroDirectPayment: any;

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-dado-cartao',
  templateUrl: 'pag-seguro-assinatura-dado-cartao.html',
})



export class PagSeguroAssinaturaDadoCartaoPage {

  chavePagina = '27dbb494777224b5ccf3177f5284171b235812aa';

  bandeiraVisa: boolean;
  bandeiraMaster: boolean;
  bandeiraDinners: boolean;

  erroServidor : string;

  codigoFinal = '';

  cartao = {
    "nomeCartao": "",
    "bandeira": "",
    "numero": "",
    "anoExpira": "",
    "mesExpira": "",
    "verificador": ""
  }


  // tratementos do cartao


  idSession = '';
  codigoHash = '';
  tokenCartao = '';

  erroNome: string;
  erroNumero: string;
  erroMes: string;
  erroAno: string;
  erroVerificador: string;
  erroBandeira: string;

  exibeLoading : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pagSrv: PagSeguroApi,  protected fcmSrv: AcessaFcmService) {
    
  }

  enviar() {
    this.exibeLoading = true;
    if (this.validacao()) {
      this.obtemTokenCartao()
        .then((result) => {
          console.log('Then' , result);
          Cartao.anoExpira = this.cartao.anoExpira;
          Cartao.bandeira = this.cartao.bandeira;
          Cartao.mesExpira = this.cartao.mesExpira;
          Cartao.nomeCartao = this.cartao.nomeCartao;
          Cartao.numero = this.cartao.numero;
          Cartao.verificador = this.cartao.verificador;
          this.exibeLoading = false;
          this.navCtrl.push(PagSeguroAssinaturaConfirmacaoPage);
        })
        .catch((result) => {
          console.log('Catch' , result);
          this.erroServidor = this.trataErro(result.errors);
          this.exibeLoading = false;
        })
    } else {
      this.exibeLoading = false;
    }
  }

  trataErro(result:any) : string {
    console.log('Result-Erro:' , result);
    if (result[10000]) return 'Bandeira do cartão incorreta';
    if (result[10001]) return 'Número do cartão incorreto';
    return 'Erro nos dados';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePagSeguroPage');
    this.fcmSrv.registraVisitaPagina(this.chavePagina);
    this.pagSrv.ObtemSessao()
      .subscribe((resp) => {
        console.log('Resp- Sessao:' + JSON.stringify(resp));
        this.idSession = resp.idSessao;
        this.obtemMeioPagamento(1.15);
        this.obtemHashCliente();
      })
  }

  obtemMeioPagamento(valor: number) {
    PagSeguroDirectPayment.setSessionId(this.idSession);
    PagSeguroDirectPayment.getPaymentMethods({
      amount: valor,
      success: function (response) {
        console.log('Meio pagto:' + JSON.stringify(response));
        //this.obtemHashCliente();
      },
      error: function (response) {
        console.log('MeioPgto Falha:' + JSON.stringify(response));
      },
      complete: function (response) {
      }
    });
  }

  obtemHashCliente() {
    PagSeguroDirectPayment.setSessionId(this.idSession);
    console.log('--> Vai buscar o hash');
    PagSeguroDirectPayment.onSenderHashReady(function (response) {
      console.log('onSender-response:' + JSON.stringify(response));
      if (response.status == 'error') {
        console.log('onSender:' + response.message);
        return false;
      }
      console.log('Hash: ', response.senderHash);
      //hashGlobal = response.senderHash;
      Assinatura.sender.hash = response.senderHash;
    });
  }



  obtemTokenCartao(): Promise<any> {
    return new Promise((resolve, reject) => {
      PagSeguroDirectPayment.createCardToken({
        cardNumber: this.cartao.numero, // Número do cartão de crédito
        brand: this.cartao.bandeira, // Bandeira do cartão
        cvv: this.cartao.verificador, // CVV do cartão
        expirationMonth: this.cartao.mesExpira, // Mês da expiração do cartão
        expirationYear: '20' + this.cartao.anoExpira, // Ano da expiração do cartão, é necessário os 4 dígitos.
        success: (response) => {
          console.log('TokenCard Sucesso:' + JSON.stringify(response.card.token));
          Assinatura.paymentMethod.creditCard.token = response.card.token;
          console.log('Vai chamar finalizar');
          console.log('This:', this);
          console.log('NavCtrl:', this.navCtrl);
          Assinatura.paymentMethod.creditCard.holder.phone = Assinatura.sender.phone;
          Assinatura.paymentMethod.creditCard.holder.name = this.cartao.nomeCartao;
          Assinatura.paymentMethod.creditCard.holder.documents = Assinatura.sender.documents;
          resolve(response.card.token);
        },
        error(error) {
          reject(error)
        }
      })
    });
  }

  /*
  obtemTokenCartao() {
    //this.escolheBandeira();
    console.log('--> Chamou token card');
    PagSeguroDirectPayment.createCardToken({
      cardNumber: this.cartao.numero, // Número do cartão de crédito
      brand: this.cartao.bandeira, // Bandeira do cartão
      cvv: this.cartao.verificador, // CVV do cartão
      expirationMonth: this.cartao.mesExpira, // Mês da expiração do cartão
      expirationYear: '20' + this.cartao.anoExpira, // Ano da expiração do cartão, é necessário os 4 dígitos.
      success: function (response) {
        // Retorna o cartão tokenizado.
        console.log('TokenCard Sucesso:' + JSON.stringify(response.card.token));
        Assinatura.paymentMethod.creditCard.token = response.card.token;
        console.log('Vai chamar finalizar');
        console.log('This:', this);
        console.log('NavCtrl:', this.navCtrl);
        Assinatura.paymentMethod.creditCard.holder.phone = Assinatura.sender.phone;
        Assinatura.paymentMethod.creditCard.holder.name = this.cartao.nomeCartao;
        Assinatura.paymentMethod.creditCard.holder.documents = Assinatura.sender.documents;

        this.navCtrl.push(PagSeguroAssinaturaConfirmacaoPage);
      },
      error: function (response) {
        console.log('TokenCard Erro:' + JSON.stringify(response));
      },
      complete: function (response) {
        // Callback para todas chamadas.
      }
    });
  }
  */



  validacao() {
    let saida = true;
    console.log('cartao: ', JSON.stringify(this.cartao));
    if (!this.cartao.nomeCartao) {
      this.erroNome = "Coloque o nome impresso em seu cartão";
      saida = false;
    } else {
      this.erroNome = null;
    }
    if (!this.cartao.numero) {
      this.erroNumero = "Coloque o número de seu cartão";
      saida = false;
    } else {
      this.erroNumero = null;
    }
    if (!this.cartao.mesExpira) {
      this.erroMes = "Coloque o mês de expiração de seu cartão";
      saida = false;
    } else {
      this.erroMes = null;
    }
    if (!this.cartao.anoExpira) {
      this.erroAno = "Coloque o ano de expiração de seu cartão";
      saida = false;
    } else {
      this.cartao.anoExpira = this.cartao.anoExpira;
      this.erroAno = null;
    }
    if (!this.cartao.verificador) {
      this.erroVerificador = "Coloque o dígito verificador de seu cartão";
      saida = false;
    } else {
      this.erroVerificador = null;
    }
    if (!this.bandeiraVisa && !this.bandeiraMaster && !this.bandeiraDinners) {
      this.erroBandeira = "Selecione a bandeira de seu cartão";
      saida = false;
    } else {
      this.erroBandeira = null;
      this.escolheBandeira();
    }
    console.log('Saida: ', saida);
    console.log('cartao-saida: ', JSON.stringify(this.cartao));
    return saida;
  }


  voltar() {
    //this.navCtrl.push(PagSeguroAssinaturaDadoClientePage);
    this.navCtrl.pop();
  }


  preencher() {
    this.cartao.numero = '4230750301865915';
    this.cartao.verificador = '997';
    this.cartao.mesExpira = '01';
    this.cartao.anoExpira = '27';
    this.cartao.nomeCartao = 'PAULO L FORESTIERI';
  }

 

  alteraMaster(valor) {
    if (valor) {
      this.bandeiraDinners = false;
      this.bandeiraVisa = false;
    }
  }

  alteraVisa(valor) {
    if (valor) {
      this.bandeiraDinners = false;
      this.bandeiraMaster = false;
    }
  }

  alteraDinners(valor) {
    if (valor) {
      this.bandeiraMaster = false;
      this.bandeiraVisa = false;
    }
  }
  escolheBandeira() {
    if (this.bandeiraDinners) this.cartao.bandeira = 'diners';
    if (this.bandeiraMaster) this.cartao.bandeira = 'mastercard';
    if (this.bandeiraVisa) this.cartao.bandeira = 'visa';
  }

}

