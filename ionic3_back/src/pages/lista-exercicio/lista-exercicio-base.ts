
import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { ExercicioCadastroPage } from '../exercicio-cadastro/exercicio-cadastro';


export abstract class ListaExercicioPageBase {

	protected listaItem: Exercicio[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
		
    	return ExercicioCadastroPage;
    	
  	}
  	getPageDetalhe(): Page {
		
    	return ExercicioCadastroPage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: ExercicioApi) {
	}

	ionViewWillEnter() {
    	console.log('ionViewWillEnter ListaExercicioPage<<LISTA_ITEM>>');
    	this.inicializacao();
    	this.carregaLista();
  	}
  	
  	carregaLista() {
  		console.log('ListaExercicioPageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('Exercicio.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: Exercicio[]) => {
  				console.log('ListaExercicioPageBase:LoadLista:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  
	protected detalheId(item: Exercicio) {
		this.navCtrl.push(this.getPageEdicao(), {
      		id: item.id
		});
  	}
  	protected alterarId(item: Exercicio) {
		this.navCtrl.push(this.getPageDetalhe(), {
      		id: item.id
		});
  	}
  	protected novo() {
		this.navCtrl.push(this.getPageEdicao());
	}
}
