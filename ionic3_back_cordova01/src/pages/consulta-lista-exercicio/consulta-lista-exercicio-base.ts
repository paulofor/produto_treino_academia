
import { Exercicio, ExercicioApi, Usuario } from '../../shared/sdk';
import { LoopBackFilter } from '../../shared/sdk';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { ExercicioGraficoExecucaoPage } from '../exercicio-grafico-execucao/exercicio-grafico-execucao';
import { Storage } from '@ionic/storage';

// Tipo: LISTA_ITEM
export abstract class ConsultaListaExercicioPageBase {

    protected usuario: Usuario;

	protected listaItem: Exercicio[];
	protected abstract inicializacao();
	protected abstract getFiltro(): LoopBackFilter;
	
	 
	getPageEdicao(): Page {
	
    	return ExercicioGraficoExecucaoPage;
    	
  	}
  	getPageDetalhe(): Page {
	
    	return ExercicioGraficoExecucaoPage;
    	
  	}

	constructor(public navCtrl: NavController, protected srv: ExercicioApi,protected storage: Storage) {
	}

	ionViewWillEnter() {
    		console.log('ionViewWillEnter ConsultaListaExercicioPage<<LISTA_ITEM>>');
    		this.carregaUsuario();
    		this.inicializacao();
    		
  	}
  	
  	carregaLista() {
  		console.log('ConsultaListaExercicioPageBase:filtro: ' , JSON.stringify(this.getFiltro()));
		console.log('Exercicio.find');
  		this.srv.find(this.getFiltro())
  			.subscribe((resultado: Exercicio[]) => {
  				console.log('ConsultaListaExercicioPageBase:LoadLista:' , resultado);
  				this.listaItem = resultado;
  			})
  	}
  	  carregaUsuario() {
		this.storage.get('user').then((val: Usuario) => {
			this.usuario = val;
			this.carregaLista();
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
