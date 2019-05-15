import { LoopBackFilter, Usuario } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Tipo: GENERICA
export abstract class PrincipalPerformancePageBase {

	protected usuario: Usuario;
  
	protected abstract inicializacao();
 
	constructor(	public navParams: NavParams,
  					public navCtrl: NavController,
					protected storage: Storage) {
	} 
  
	
	carregaUsuario() {
		this.storage.get('user').then((val: Usuario) => {
			this.usuario = val;
			this.inicializacao();
		})
	}
  
	ionViewWillEnter() {
		console.log('');
		console.log('Tela: PrincipalPerformancePage<<GENERICA>> ');
		this.carregaUsuario();
	}
  
	ionViewDidLoad() {
	}
}
    
    