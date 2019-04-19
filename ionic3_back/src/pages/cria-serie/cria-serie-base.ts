import { ItemSerie, ItemSerieApi } from '../../shared/sdk';
import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';
import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

export abstract class CriaSeriePageBase {
  
  protected item: ItemSerie;
  
  protected abstract inicializacaoComplementos();
  protected abstract criaItem() : ItemSerie;

  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ItemSerieApi, 
				public srvSerieTreino : SerieTreinoApi,
				public srvExercicio : ExercicioApi,
  				) {
  }


  private inicializaItem() {
	this.item = this.navParams.get('item');
	console.log('CriaSeriePageBase:ItemParametro: ', this.item);
	if (!this.item) this.item = this.criaItem();
	console.log('CriaSeriePageBase:ItemCriado: ', this.item);
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter CriaSeriePage');
    this.inicializacaoComplementos();
    this.inicializaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad CriaSeriePage');
  }
  
	protected listaSerieTreino : SerieTreino[];
	protected carregaSerieTreino(){
		this.srvSerieTreino.find()
      		.subscribe((result:SerieTreino[]) => {
        		console.log('listaSerieTreino:' , result);
        		this.listaSerieTreino = result;
      	})
	}
	
	protected listaSerieTreinoUsuario : SerieTreino[];
	protected carregaSerieTreinoUsuario(idUsuario:number){
		this.srvSerieTreino.find({'where' : {'idUsuario' : idUsuario} })
      		.subscribe((result:SerieTreino[]) => {
        		this.listaSerieTreinoUsuario = result;
      	})
	}

	protected listaExercicio : Exercicio[];
	protected carregaExercicio(){
		this.srvExercicio.find()
      		.subscribe((result:Exercicio[]) => {
        		console.log('listaExercicio:' , result);
        		this.listaExercicio = result;
      	})
	}
	
	protected listaExercicioUsuario : Exercicio[];
	protected carregaExercicioUsuario(idUsuario:number){
		this.srvExercicio.find({'where' : {'idUsuario' : idUsuario} })
      		.subscribe((result:Exercicio[]) => {
        		this.listaExercicioUsuario = result;
      	})
	}


	
	protected submit() {
		console.log('CriaSeriePageBase:Submit-Item:' , this.item);
    	this.srv.submitCriaSeriePage(this.item)
      		.subscribe((resultado) => {
        		console.log('CriaSeriePageBase:Submit-Result: ' , resultado);
				this.navCtrl.pop();
      	})
	}
}
