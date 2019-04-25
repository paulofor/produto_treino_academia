
import { DiaTreino, DiaTreinoApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';


export abstract class SerieListaExecucaoPageBase {

	protected listaItem: DiaTreino[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
		
    	throw new Error("SerieListaExecucaoPage sem tela de edicao.");
    	
  	}
  	getPageDetalhe(): Page {
		
    	throw new Error("SerieListaExecucaoPage sem tela de detalhe.");
    	
  	}

	constructor(public navCtrl: NavController, protected srv: DiaTreinoApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter SerieListaExecucaoPage<<LISTA_ITEM>>');
    	this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		console.log('SerieListaExecucaoPageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('DiaTreino.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: DiaTreino[]) => {
  				console.log('SerieListaExecucaoPageBase:LoadLista:' , resultado);
  				this.listaItem = resultado;
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
