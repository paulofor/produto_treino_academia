
import { DiaTreino, DiaTreinoApi, Usuario } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { DetalheDiaTreinoPage } from '../detalhe-dia-treino/detalhe-dia-treino';
import { Storage } from '@ionic/storage';
import { MSG_SEM_INTERNET } from '../../app/const';
import { ComponenteBase } from '../componente-base';


// Tipo: LISTA_ITEM
export abstract class ConsultaListaDiaTreinoPageBase extends ComponenteBase{

    protected usuario: Usuario;

	protected listaItem: DiaTreino[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	protected erroMsg: string;
	
	 
	getPageEdicao(): Page {
	
    	return DetalheDiaTreinoPage;
    	
  	}
  	getPageDetalhe(): Page {
	
    	return DetalheDiaTreinoPage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: DiaTreinoApi,protected storage: Storage) {
		super();
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
	
	protected verificaConexao(erro: any) {
		if (erro == 'Server error') {
			this.erroMsg = MSG_SEM_INTERNET;
		}
	}
}
