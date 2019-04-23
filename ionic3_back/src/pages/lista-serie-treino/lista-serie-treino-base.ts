
import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { SerieTreinoEdicaoPage } from '../serie-treino-edicao/serie-treino-edicao';


export abstract class ListaSerieTreinoPageBase {

	protected listaVazia: boolean;
	protected listaItem: SerieTreino[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
		
    	return SerieTreinoEdicaoPage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: SerieTreinoApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter ListaSerieTreinoPage');
    	this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		console.log('ListaSerieTreinoPageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('SerieTreino.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: SerieTreino[]) => {
  				console.log('ListaSerieTreinoPageBase:LoadLista:' , JSON.stringify(resultado));
				  this.listaItem = resultado;
				  this.listaVazia = (this.listaItem.length==0);
				  
  			})
  	}
  
	protected alterar(item: SerieTreino) {
		this.navCtrl.push(this.getPageEdicao(), {
      		item: item
		});
  	}
  	protected alterarId(item: SerieTreino) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
