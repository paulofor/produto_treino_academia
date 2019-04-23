import { ItemSerie, ItemSerieApi , LoopBackFilter } from '../../shared/sdk';
import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';
import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

export abstract class EditaItemSeriePageBase {
  
  protected item: ItemSerie;
  
  protected abstract inicializacaoComplementos();
  protected abstract criaItem() : ItemSerie;
  protected abstract executaNavegacao(navCtrl: NavController, result: ItemSerie);
  protected abstract filtroLoadId() : LoopBackFilter;
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
	console.log('EditaItemSeriePageBase:ItemParametro: ', this.item);
	if (!this.item) {
		var id = this.navParams.get('id');
		if (id) {
			console.log('EditaItemSeriePageBase:Id: ' , id);
			this.srv.findById(id, this.filtroLoadId())
				.subscribe((result:ItemSerie) => {
					this.item = result;
					console.log('EditaItemSeriePageBase:LoadId: ' , this.item);
				})
		} else {
			this.item = this.criaItem();
			console.log('EditaItemSeriePageBase:ItemCriado: ', this.item);
		}
	} else {
		this.item = this.complementaItem(this.item);
		console.log('EditaItemSeriePageBase:ItemComComplemento: ', this.item);
	}
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter EditaItemSeriePage');
    this.inicializacaoComplementos();
    this.inicializaItem();
  }
  ionViewDidLoad() {
  	console.log('ionViewDidLoad EditaItemSeriePage');
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
		console.log('EditaItemSeriePageBase:Submit-Item:' , JSON.stringify(this.item));
    	this.srv.submitEditaItemSeriePage(this.item)
      		.subscribe((resultado:ItemSerie) => {
        		console.log('EditaItemSeriePageBase:Submit-Result: ' , JSON.stringify(resultado));
				this.executaNavegacao(this.navCtrl,resultado);
      	})
	}
}