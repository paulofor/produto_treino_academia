
import { DiaTreino, DiaTreinoApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';

export abstract class SerieListaExecucaoPageBase {

	protected listaItem: DiaTreino[];
	//protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	protected abstract getPageEdicao(): Page;

	constructor(public navCtrl: NavController, protected srv: DiaTreinoApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter SerieListaExecucaoPage');
    	//this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: DiaTreino[]) => {
  				console.log('ListaItem:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  
	protected alterar(item: DiaTreino) {
		this.navCtrl.push(this.getPageEdicao(), {
      		item: item
		});
  	}
  	
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
