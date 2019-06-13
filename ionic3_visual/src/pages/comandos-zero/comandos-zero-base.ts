import { Usuario } from "../../shared/sdk";
import { Storage } from '@ionic/storage';
import { MSG_SEM_INTERNET } from '../../app/const';
import { ComponenteBase } from '../componente-base';


export abstract class ComandosZeroPageBase extends ComponenteBase{

  protected erroMsg: string;

  usuario: Usuario;

  protected abstract inicializacao();

  constructor(protected storage: Storage) {
  	super();
  }

  protected abstract getNomeAplicacao() : string;
 
  ionViewWillEnter() {
    //console.log('ionViewDidLoad ComandosZeroPageBase');
    console.log('');
    console.log('Tela: ComandosZeroPage');
    this.storage.get('user').then((val: Usuario) => {
      this.usuario = val;
      this.inicializacao();
    })
  }

  protected verificaConexao(erro: any) {
    if (erro == 'Server error') {
      this.erroMsg = MSG_SEM_INTERNET;
    }
  }

}
