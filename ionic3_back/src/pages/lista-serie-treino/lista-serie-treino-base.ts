
import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';

export abstract class ListaSerieTreinoPageBase {

	protected listaItem: SerieTreino[];
	//protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	protected abstract getPageEdicao(): Page;

	constructor(public navCtrl: NavController, protected srv: SerieTreinoApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter ListaSerieTreinoPage');
    	//this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: SerieTreino[]) => {
  				console.log('ListaItem:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  
	protected alterar(item: SerieTreino) {
		this.navCtrl.push(this.getPageEdicao(), {
      		item: item
		});
  	}
  	
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
