
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

	constructor(public navCtrl: NavController, protected srv: DiaTreinoApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter SerieListaExecucaoPage');
    	this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		console.log('SerieListaExecucaoPageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('DiaTreino.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: DiaTreino[]) => {
  				console.log('SerieListaExecucaoPageBase:LoadLista:' , JSON.stringify(resultado));
  				this.listaItem = resultado;
  			})
  	}
  
	protected alterar(item: DiaTreino) {
		this.navCtrl.push(this.getPageEdicao(), {
      		item: item
		});
  	}
  	protected alterarId(item: DiaTreino) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
