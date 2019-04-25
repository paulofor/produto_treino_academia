import { ItemSerie, ItemSerieApi , LoopBackFilter } from '../../shared/sdk';
import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';
import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

// Tipo: EDITA
export abstract class CriaSeriePageBase {
  
  // Objeto principal para a edicao
  protected item: ItemSerie;
  
  // chamar os metodos de carga de combos
  protected abstract inicializacaoComplementos();
  
  // se nao tiver nem parametro item nem id
  protected abstract criaItem() : ItemSerie;
  
  // chamada apos o submit
  protected abstract executaNavegacao(navCtrl: NavController, result: ItemSerie);
  
  // filtro para ser usado quando temos o parametro id
  protected abstract filtroLoadId(id:any) : LoopBackFilter;
  
  // quando existe parametro item
  protected abstract complementaItem(novo:ItemSerie) : ItemSerie;



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
	if (!this.item) {
		var id = this.navParams.get('id');
		if (id) {
			console.log('CriaSeriePageBase:Id: ' , id);
			this.srv.findById(id, this.filtroLoadId(id))
				.subscribe((result:ItemSerie) => {
					this.item = result;
					console.log('CriaSeriePageBase:LoadId: ' , this.item);
				})
		} else {
			this.item = this.criaItem();
			console.log('CriaSeriePageBase:ItemCriado: ', this.item);
		}
	} else {
		this.item = this.complementaItem(this.item);
		console.log('CriaSeriePageBase:ItemComComplemento: ', this.item);
	}
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter CriaSeriePage<<EDITA>>');
    this.inicializacaoComplementos();
    this.inicializaItem();
  }
  ionViewDidLoad() {
  	console.log('ionViewDidLoad CriaSeriePage<<EDITA>>');
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
		console.log('CriaSeriePageBase:Submit-Item:' , JSON.stringify(this.item));
    	this.srv.submitCriaSeriePage(this.item)
      		.subscribe((resultado:ItemSerie) => {
        		console.log('CriaSeriePageBase:Submit-Result: ' , JSON.stringify(resultado));
				this.executaNavegacao(this.navCtrl,resultado);
      	})
	}
}
