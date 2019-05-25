
import { SerieTreino, SerieTreinoApi, Usuario } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { SerieTreinoEdicaoPage } from '../serie-treino-edicao/serie-treino-edicao';
import { Storage } from '@ionic/storage';
import { MSG_SEM_INTERNET } from '../../app/const';

// Tipo: LISTA_ITEM
export abstract class ListaSerieTreinoPageBase {

    protected usuario: Usuario;

	protected listaItem: SerieTreino[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	protected erroMsg: string;
	
	 
	getPageEdicao(): Page {
	
    	return SerieTreinoEdicaoPage;
    	
  	}
  	getPageDetalhe(): Page {
	
    	return SerieTreinoEdicaoPage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: SerieTreinoApi,protected storage: Storage) {
	}

	ionViewWillEnter() {
		console.log('');
    		console.log('Tela: ListaSerieTreinoPage<<LISTA_ITEM>> : SerieTreino');
    		this.carregaUsuario();
    		this.inicializacao();
    		
  	}
  	
  	carregaLista() {
  		console.log('SerieTreino.find: ', JSON.stringify(this.getFiltro()));
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: SerieTreino[]) => {
  				console.log('Result:' , resultado);
  				this.listaItem = resultado;
  				this.erroMsg = '';
  			},
			(erro: any) => {
				if (erro == 'Server error') {
					this.erroMsg = MSG_SEM_INTERNET;
				}
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
	
	protected verificaConexao(erro: any) {
		if (erro == 'Server error') {
			this.erroMsg = MSG_SEM_INTERNET;
		}
	}
}
