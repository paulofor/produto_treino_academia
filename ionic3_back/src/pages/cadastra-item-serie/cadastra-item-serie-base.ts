
import { ItemSerie, ItemSerieApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { EditaItemSeriePage } from '../edita-item-serie/edita-item-serie';


export abstract class CadastraItemSeriePageBase {

	protected listaItem: ItemSerie[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
		
    	return EditaItemSeriePage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: ItemSerieApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter CadastraItemSeriePage');
    	this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: ItemSerie[]) => {
  				console.log('ListaItem:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  
	protected alterar(item: ItemSerie) {
		this.navCtrl.push(this.getPageEdicao(), {
      		item: item
		});
  	}
  	
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
