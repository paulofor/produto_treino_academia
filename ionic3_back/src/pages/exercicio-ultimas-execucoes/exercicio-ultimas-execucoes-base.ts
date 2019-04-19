
import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';


export abstract class ExercicioUltimasExecucoesPageBase {

	protected listaItem: Exercicio[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
		
    	throw new Error("ExercicioUltimasExecucoesPage sem tela de edicao.");
    	
  	}

	constructor(public navCtrl: NavController, protected srv: ExercicioApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter ExercicioUltimasExecucoesPage');
    	this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		console.log('ExercicioUltimasExecucoesPageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('Exercicio.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: Exercicio[]) => {
  				console.log('ExercicioUltimasExecucoesPageBase:LoadLista:' , JSON.stringify(resultado));
  				this.listaItem = resultado;
  			})
  	}
  
	protected alterar(item: Exercicio) {
		this.navCtrl.push(this.getPageEdicao(), {
      		item: item
		});
  	}
  	protected alterarId(item: Exercicio) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
