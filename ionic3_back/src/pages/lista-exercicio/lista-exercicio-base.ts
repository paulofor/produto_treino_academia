
import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';

export abstract class ListaExercicioPageBase {

	protected listaItem: Exercicio[];
	//protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	protected abstract getPageEdicao(): Page;

	constructor(public navCtrl: NavController, protected srv: ExercicioApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter ListaExercicioPage');
    	//this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: Exercicio[]) => {
  				console.log('ListaItem:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  
	protected alterar(item: Exercicio) {
		this.navCtrl.push(this.getPageEdicao(), {
      		item: item
		});
  	}
}
