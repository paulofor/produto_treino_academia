
import { DiaTreino, DiaTreinoApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { DetalheDiaTreinoPage } from '../detalhe-dia-treino/detalhe-dia-treino';


export abstract class ConsultaListaDiaTreinoPageBase {

	protected listaItem: DiaTreino[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
		
    	return DetalheDiaTreinoPage;
    	
  	}
  	getPageDetalhe(): Page {
		
    	return DetalheDiaTreinoPage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: DiaTreinoApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter ConsultaListaDiaTreinoPage<<LISTA_ITEM>>');
    	this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		console.log('ConsultaListaDiaTreinoPageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('DiaTreino.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: DiaTreino[]) => {
  				console.log('ConsultaListaDiaTreinoPageBase:LoadLista:' , resultado);
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
