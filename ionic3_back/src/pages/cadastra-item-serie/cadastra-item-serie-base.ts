
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
  	getPageDetalhe(): Page {
		
    	return EditaItemSeriePage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: ItemSerieApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter CadastraItemSeriePage<<LISTA_ITEM>>');
    	this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		console.log('CadastraItemSeriePageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('ItemSerie.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: ItemSerie[]) => {
  				console.log('CadastraItemSeriePageBase:LoadLista:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  
	protected detalheId(item: ItemSerie) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected alterarId(item: ItemSerie) {
		this.navCtrl.push(this.getPageDetalhe(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
