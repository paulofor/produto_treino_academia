import { Usuario } from "../../shared/sdk";
import { Storage } from '@ionic/storage';


export abstract class ComandosZeroPageBase {



  usuario: Usuario;

  protected abstract inicializacao();

  constructor(protected storage: Storage) {
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


}
