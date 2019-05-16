
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListaSerieTreinoPageBase } from './lista-serie-treino-base';
import { SerieTreinoApi, LoopBackFilter, SerieTreino } from '../../shared/sdk';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-lista-serie-treino',
  templateUrl: 'lista-serie-treino.html'
})
export class ListaSerieTreinoPage extends ListaSerieTreinoPageBase {



  protected inicializacao() {
   
  }

  constructor(public navCtrl: NavController, protected srv: SerieTreinoApi, 
    protected storage: Storage, private alertCtrl:AlertController) {
    super(navCtrl, srv, storage);
  }


  protected getFiltro(): LoopBackFilter {
    //console.log('Usuario' , this.usuario);
    return { 'where' : {'usuarioId' : this.usuario.id } , 'counts' : 'listaItemSerie' };
  }

  protected novo() {
    var serieNova = new SerieTreino();
    serieNova.dataCriacao = new Date();
    serieNova.ativa = 1;
    serieNova.qtdeExecucao = 0;
    serieNova.usuarioId = this.usuario.id;
    this.srv.create(serieNova)
      .subscribe((result:SerieTreino) => {
        this.navCtrl.push(this.getPageEdicao(), {
            id : result.id
        });
      })
		
  }
  
  getSituacao(item:SerieTreino) {
    if (item.ativa==1) return 'ativa';
    else return 'desativa';
  }


  excluirId(item: SerieTreino) {
    let alert = this.alertCtrl.create({
      title: 'Confirma exclusão',
      message: 'Deseja realmente retirar essa série ?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.srv.deleteById(item.id)
              .subscribe((result) => {
                this.carregaUsuario();
              })
          }
        }
      ]
    });
    alert.present();
  }
  

  exibeAlterar(item:SerieTreino) : boolean {
    return true;
  }

  exibeExcluir(item:SerieTreino) : boolean {
    return (item.listaItemSerieCount==0);
  }
}
