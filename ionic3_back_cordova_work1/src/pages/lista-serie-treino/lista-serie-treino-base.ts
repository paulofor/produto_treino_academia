
import { SerieTreino, SerieTreinoApi, Usuario } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { SerieTreinoEdicaoPage } from '../serie-treino-edicao/serie-treino-edicao';
import { Storage } from '@ionic/storage';

// Tipo: LISTA_ITEM
export abstract class ListaSerieTreinoPageBase {

    protected usuario: Usuario;

	protected listaItem: SerieTreino[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
	
    	return SerieTreinoEdicaoPage;
    	
  	}
  	getPageDetalhe(): Page {
	
    	return SerieTreinoEdicaoPage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: SerieTreinoApi,protected storage: Storage) {
	}

	ionViewWillEnter() {
    		console.log('ionViewWillEnter ListaSerieTreinoPage<<LISTA_ITEM>>');
    		this.carregaUsuario();
    		this.inicializacao();
    		
  	}
  	
  	carregaLista() {
  		console.log('ListaSerieTreinoPageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('SerieTreino.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: SerieTreino[]) => {
  				console.log('ListaSerieTreinoPageBase:LoadLista:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  	  carregaUsuario() {
		this.storage.get('user').then((val: Usuario) => {
			this.usuario = val;
			this.carregaLista();
		})
  	}
  
	protected detalheId(item: SerieTreino) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected alterarId(item: SerieTreino) {
		this.navCtrl.push(this.getPageDetalhe(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}