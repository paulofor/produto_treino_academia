
import { DiaTreino, DiaTreinoApi, Usuario } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { DetalheDiaTreinoPage } from '../detalhe-dia-treino/detalhe-dia-treino';
import { Storage } from '@ionic/storage';

// Tipo: LISTA_ITEM
export abstract class ConsultaListaDiaTreinoPageBase {

    protected usuario: Usuario;

	protected listaItem: DiaTreino[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
	
    	return DetalheDiaTreinoPage;
    	
  	}
  	getPageDetalhe(): Page {
	
    	return DetalheDiaTreinoPage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: DiaTreinoApi,protected storage: Storage) {
	}

	ionViewWillEnter() {
		console.log('');
    		console.log('Tela: ConsultaListaDiaTreinoPage<<LISTA_ITEM>> : DiaTreino');
    		this.carregaUsuario();
    		this.inicializacao();
    		
  	}
  	
  	carregaLista() {
  		console.log('DiaTreino.find: ', JSON.stringify(this.getFiltro()));
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: DiaTreino[]) => {
  				console.log('Result:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  	  carregaUsuario() {
		this.storage.get('user').then((val: Usuario) => {
			this.usuario = val;
			this.carregaLista();
		})
  	}
  
	protected detalheId(item: DiaTreino) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected alterarId(item: DiaTreino) {
		this.navCtrl.push(this.getPageDetalhe(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
