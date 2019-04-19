
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
  		console.log('CadastraItemSeriePageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('ItemSerie.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: ItemSerie[]) => {
  				console.log('CadastraItemSeriePageBase:LoadLista:' , JSON.stringify(resultado));
  				this.listaItem = resultado;
  			})
  	}
  
	protected alterar(item: ItemSerie) {
		this.navCtrl.push(this.getPageEdicao(), {
      		item: item
		});
  	}
  	protected alterarId(item: ItemSerie) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
