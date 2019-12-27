import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura, Cartao } from '../../shared/assinatura';
import { PagSeguroApi } from '../../shared/sdk/services/integracao/PagSeguro';
import { UsuarioProdutoApi } from '../../shared/sdk/services/custom/UsuarioProduto';
import { Storage } from '@ionic/storage';
import { PagSeguroAssinaturaSucessoPage } from '../pag-seguro-assinatura-sucesso/pag-seguro-assinatura-sucesso';
import { AcessaFcmService } from '../../servico/acessa-fcm-service';
/**
 * Generated class for the PagSeguroAssinaturaConfirmacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-confirmacao',
  templateUrl: 'pag-seguro-assinatura-confirmacao.html',
})
export class PagSeguroAssinaturaConfirmacaoPage {

  chavePagina = '557b4687345609d78d1f48c605d45ddd666a3a3c';

  assinatura : any;
  cartao : any;

  chave : String;

  erroServidor: String = '';

  exibeLoading: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private pagSrv: PagSeguroApi, private storage:Storage, private usuarioSrv: UsuarioProdutoApi
              ,  protected fcmSrv: AcessaFcmService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaConfirmacaoPage');
    this.fcmSrv.registraVisitaPagina(this.chavePagina);
    this.assinatura = Assinatura;
    this.cartao = Cartao;
    this.storage.get("chave")
      .then((chave) => {
        this.chave = chave;
      });
  }

  getBandeira() : string {
    let saida = '';
    if (this.cartao.bandeira == 'visa') saida = 'Visa';
    if (this.cartao.bandeira == 'mastercard') saida = 'MasterCard';
    if (this.cartao.bandeira == 'diners') saida = 'Diners';
    return saida;
  }

  enviar() {
    this.exibeLoading = true;
    console.log('Entrou em finalizar:', Assinatura);
    this.pagSrv.AderePlanoTreino(Assinatura)
      .subscribe((result) => {
        console.log('Result:', result);
        if (result.error) {
          this.erroServidor = this.trataErro(result.errors);
          this.exibeLoading = false;
        }
        if (result.code) {
          this.usuarioSrv.RegistraAssinatura(this.chave,result.code)
            .subscribe((result) => {
                this.exibeLoading = false;
                this.navCtrl.push(PagSeguroAssinaturaSucessoPage);
            })
        }
      })
  }

  voltar() {
    this.navCtrl.pop();
  }

  trataErro(erro:any) : string{
    if (erro[53048]) return 'Erro na data de nascimento';
    if (erro[10003] || erro[10026] || erro[10050]) return 'Erro no email';
    if (erro[10025] || erro[10049]) return 'Erro no nome';
    if (erro[11013] ) return 'Erro no DDD de telefone';
    if (erro[11014] || erro[19014]) return 'Erro no número de telefone';
    if (erro[17065] | erro[50103] || erro[61008] || erro[61009] || erro[61010] | erro[61011]) return 'Erro no cpf';
    if (erro[17070] ) return 'Erro no endereço';
    if (erro[19001] ) return 'Erro no CEP do endereço';
    if (erro[19002] ) return 'Erro no nome de rua do endereço';
    if (erro[19003] || erro[50105]) return 'Erro no número de rua do endereço';
    if (erro[19004] ) return 'Erro no complemento de endereço';
    if (erro[19005] || erro[50106]) return 'Erro no bairro do endereço';
    if (erro[19006] || erro[50108]) return 'Erro na cidade do endereço';
    if (erro[19007] || erro[57038]) return 'Erro no estado do endereço'
    if (erro[19008] || erro[50107]) return 'Erro no pais do endereço';
    if (erro[53042] ) return 'Erro no nome do titular do cartão de crédito';

    return 'Erro nos dados';
   
  }

}
